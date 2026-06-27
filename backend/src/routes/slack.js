const express = require('express');
const router = express.Router();

// POST Slack Events API webhook
router.post('/', async (req, res) => {
  try {
    const { type, challenge, event } = req.body;

    // Respond to Slack's URL verification challenge
    if (type === 'url_verification') {
      return res.json({ challenge });
    }

    // Handle Slack events
    if (type === 'event_callback') {
      console.log('Received Slack event:', event);

      // TODO: Process event based on type
      // Examples: message, app_mention, reaction_added, etc.

      // Acknowledge receipt immediately
      res.status(200).send();

      // Process event asynchronously
      // processSlackEvent(event);

      return;
    }

    res.status(400).json({ error: 'Unknown event type' });
  } catch (error) {
    console.error('Slack webhook error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
