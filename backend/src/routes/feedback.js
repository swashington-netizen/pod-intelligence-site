const express = require('express');
const router = express.Router();

// POST submit feedback
router.post('/', async (req, res) => {
  try {
    const { podId, message, userEmail } = req.body;

    if (!podId || !message) {
      return res.status(400).json({
        error: 'Missing required fields: podId, message'
      });
    }

    // TODO: Save to database
    res.status(201).json({
      message: 'Feedback submitted successfully',
      feedback: {
        id: 'temp-id',
        podId,
        message,
        userEmail,
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET feedback for a pod (admin only)
router.get('/:podId', async (req, res) => {
  try {
    const { podId } = req.params;
    // TODO: Fetch from database
    res.json({
      message: `Feedback for pod: ${podId}`,
      feedback: []
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
