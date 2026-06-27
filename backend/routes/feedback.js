/**
 * Feedback API Routes
 *
 * Handles user feedback submission for pods.
 */

const express = require('express');
const router = express.Router();

/**
 * POST /api/feedback
 *
 * Submit feedback for a pod.
 *
 * Body:
 * - podId: Pod identifier
 * - message: Feedback message
 * - userEmail: (optional) User email for follow-up
 *
 * TODO: Implement database persistence
 * For now, logs feedback and returns success response
 */
router.post('/', async (req, res) => {
  try {
    const { podId, message, userEmail } = req.body;

    // Validate required fields
    if (!podId || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        required: ['podId', 'message']
      });
    }

    // TODO: Save to database
    // For now, just log the feedback
    console.log('📝 Feedback received:', {
      podId,
      message,
      userEmail: userEmail || 'anonymous',
      timestamp: new Date().toISOString()
    });

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      feedback: {
        id: `temp-${Date.now()}`,
        podId,
        message,
        userEmail: userEmail || null,
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit feedback',
      message: error.message
    });
  }
});

/**
 * GET /api/feedback/:podId
 *
 * Get all feedback for a specific pod (admin only).
 *
 * TODO: Implement authentication and database query
 */
router.get('/:podId', async (req, res) => {
  try {
    const { podId } = req.params;

    // TODO: Fetch from database
    console.log(`Fetching feedback for pod: ${podId}`);

    res.json({
      success: true,
      podId,
      feedback: []
    });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch feedback',
      message: error.message
    });
  }
});

module.exports = router;
