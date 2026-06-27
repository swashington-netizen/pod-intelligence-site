const express = require('express');
const router = express.Router();

// GET all pods
router.get('/', async (req, res) => {
  try {
    // TODO: Fetch from database
    res.json({
      message: 'List all pods',
      pods: []
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET pod by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    // TODO: Fetch from database
    res.json({
      message: `Get pod: ${slug}`,
      pod: null
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update pod (admin only)
router.put('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    // TODO: Update in database
    res.json({
      message: `Update pod: ${slug}`,
      success: true
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
