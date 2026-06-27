/**
 * Pod API Routes
 *
 * Provides endpoints for fetching pod data from the database.
 * All routes include cache headers for performance.
 */

const express = require('express');
const router = express.Router();
const pool = require('../db/client');

/**
 * GET /api/pods
 *
 * Returns all pods with lightweight data (not full content).
 * Used for listing views like the homepage grid.
 *
 * Returns:
 * - id, name, group_id
 * - content.mission only (not full content object)
 * - last_synced_at timestamp
 *
 * Cache: 60 seconds
 */
router.get('/', async (req, res) => {
  try {
    const query = `
      SELECT
        id,
        name,
        group_id,
        content->>'mission' as mission,
        last_synced_at,
        updated_at
      FROM pods
      ORDER BY group_id, name
    `;

    const result = await pool.query(query);

    // Transform results into cleaner format
    const pods = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      groupId: row.group_id,
      mission: row.mission,
      lastSyncedAt: row.last_synced_at,
      updatedAt: row.updated_at
    }));

    // Set cache headers - public cache for 60 seconds
    res.set('Cache-Control', 'public, max-age=60');

    res.json({
      success: true,
      count: pods.length,
      pods
    });
  } catch (error) {
    console.error('Error fetching pods:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch pods',
      message: error.message
    });
  }
});

/**
 * GET /api/pods/:podId
 *
 * Returns complete pod record including full JSONB content.
 * Used for individual pod detail pages.
 *
 * Returns:
 * - Full pod record with complete content object
 * - All initiatives, metrics, next steps, sources
 *
 * Cache: 60 seconds
 */
router.get('/:podId', async (req, res) => {
  try {
    const { podId } = req.params;

    const query = `
      SELECT
        id,
        name,
        group_id,
        content,
        canvas_id,
        last_synced_at,
        updated_at
      FROM pods
      WHERE id = $1
    `;

    const result = await pool.query(query, [podId]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Pod not found',
        podId
      });
    }

    const pod = result.rows[0];

    // Transform to camelCase for frontend
    const podData = {
      id: pod.id,
      name: pod.name,
      groupId: pod.group_id,
      content: pod.content,
      canvasId: pod.canvas_id,
      lastSyncedAt: pod.last_synced_at,
      updatedAt: pod.updated_at
    };

    // Set cache headers - public cache for 60 seconds
    res.set('Cache-Control', 'public, max-age=60');

    res.json({
      success: true,
      pod: podData
    });
  } catch (error) {
    console.error('Error fetching pod:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch pod',
      message: error.message
    });
  }
});

module.exports = router;
