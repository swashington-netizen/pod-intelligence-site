/**
 * Portfolio Intelligence API Server
 *
 * Express server that provides:
 * - REST API endpoints for pod data
 * - Slack Events API webhook handler
 * - CORS support for GitHub Pages frontend
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const pool = require('./db/client');
const verifySignature = require('./slack/verifySignature');
const { handleEvent } = require('./slack/eventHandler');

// Import route handlers
const podsRouter = require('./routes/pods');
const feedbackRouter = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 5000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';

// ============================================================
// MIDDLEWARE
// ============================================================

// Security headers
app.use(helmet());

// Request logging
app.use(morgan('combined'));

// CORS configuration - allow requests from GitHub Pages frontend
app.use(cors({
  origin: ALLOWED_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Parse JSON bodies - but preserve raw body for Slack signature verification
app.use(express.json({
  verify: (req, res, buf) => {
    // Store raw body for Slack signature verification
    req.rawBody = buf.toString('utf8');
  }
}));

// ============================================================
// ROUTES
// ============================================================

/**
 * Health check endpoint
 */
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Mount API route handlers
app.use('/api/pods', podsRouter);
app.use('/api/feedback', feedbackRouter);

/**
 * POST /slack/events
 * Slack Events API webhook endpoint
 *
 * Receives events from Slack (canvas updates, app mentions, etc.)
 * and processes them to update pod content.
 */
app.post('/slack/events', verifySignature, async (req, res) => {
  try {
    const { type, event } = req.body;

    console.log(`Received Slack event: ${type}`);

    // Slack expects a quick 200 response, so we process the event async
    res.status(200).json({ ok: true });

    // Process the event asynchronously
    if (event) {
      handleEvent(event).catch(error => {
        console.error('Error processing Slack event:', error);
      });
    }
  } catch (error) {
    console.error('Error handling Slack webhook:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// ============================================================
// ERROR HANDLING
// ============================================================

/**
 * 404 handler for unknown routes
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    path: req.path
  });
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// ============================================================
// SERVER STARTUP
// ============================================================

app.listen(PORT, () => {
  console.log('═══════════════════════════════════════════════════════');
  console.log('  Portfolio Intelligence API Server');
  console.log('═══════════════════════════════════════════════════════');
  console.log(`  Environment:  ${process.env.NODE_ENV || 'development'}`);
  console.log(`  Port:         ${PORT}`);
  console.log(`  CORS Origin:  ${ALLOWED_ORIGIN}`);
  console.log('═══════════════════════════════════════════════════════');
  console.log('  Endpoints:');
  console.log('    GET  /health');
  console.log('    GET  /api/pods');
  console.log('    GET  /api/pods/:podId');
  console.log('    POST /slack/events');
  console.log('═══════════════════════════════════════════════════════');
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server gracefully...');
  pool.end(() => {
    console.log('Database pool closed');
    process.exit(0);
  });
});

module.exports = app;
