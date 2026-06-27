/**
 * Slack Event Handler
 *
 * Processes verified Slack events, specifically:
 * - file_change events (Canvas updates have file_type: "quip")
 * - app_mention events (for future interactive features)
 *
 * Workflow:
 * 1. Extract canvas file ID from event
 * 2. Look up which pod owns that canvas_id
 * 3. Fetch canvas content (TODO: implement canvas fetch)
 * 4. Normalize canvas content into structured format
 * 5. Upsert into pods table
 */

const pool = require('../db/client');
const { normalize } = require('../normalizer');

/**
 * Handle incoming Slack events
 *
 * @param {object} event - Verified Slack event payload
 * @returns {Promise<object>} Result object with status and message
 */
async function handleEvent(event) {
  console.log('Processing Slack event:', event.type);

  try {
    switch (event.type) {
      case 'file_change':
        return await handleFileChange(event);

      case 'app_mention':
        return await handleAppMention(event);

      default:
        console.log(`Ignoring unhandled event type: ${event.type}`);
        return { status: 'ignored', message: 'Event type not handled' };
    }
  } catch (error) {
    console.error('Error handling Slack event:', error);
    throw error;
  }
}

/**
 * Handle file_change events (Canvas updates)
 *
 * Canvas files in Slack have file_type: "quip"
 *
 * @param {object} event - file_change event payload
 * @returns {Promise<object>} Result object
 */
async function handleFileChange(event) {
  const file = event.file;

  if (!file) {
    console.warn('file_change event missing file object');
    return { status: 'error', message: 'Missing file object' };
  }

  // Only process Canvas files (file_type: "quip")
  if (file.filetype !== 'quip') {
    console.log(`Ignoring non-canvas file type: ${file.filetype}`);
    return { status: 'ignored', message: 'Not a canvas file' };
  }

  const canvasId = file.id;
  console.log(`Canvas updated: ${canvasId}`);

  // Look up which pod owns this canvas
  const podQuery = `
    SELECT id, name, content
    FROM pods
    WHERE canvas_id = $1
  `;

  const result = await pool.query(podQuery, [canvasId]);

  if (result.rows.length === 0) {
    console.warn(`No pod found for canvas_id: ${canvasId}`);
    return {
      status: 'error',
      message: 'No pod associated with this canvas',
      canvasId
    };
  }

  const pod = result.rows[0];
  console.log(`Found pod: ${pod.name} (${pod.id})`);

  // TODO: Fetch canvas content from Slack API
  // For now, use a stub that returns placeholder text
  // Real implementation will use Slack Files API:
  // const canvasContent = await fetchCanvasContent(canvasId);
  const canvasContent = await fetchCanvasContentStub(canvasId);

  // Normalize canvas content into structured format
  const existingContent = pod.content || {};
  const normalizedContent = normalize(canvasContent, existingContent);

  // Add metadata about the Slack user who made the change
  if (event.user_id) {
    normalizedContent.lastEditedBy = event.user_id;
  }

  // Upsert into pods table
  const upsertQuery = `
    UPDATE pods
    SET
      content = $1,
      last_synced_at = NOW(),
      updated_at = NOW()
    WHERE id = $2
    RETURNING id, name, updated_at
  `;

  const upsertResult = await pool.query(upsertQuery, [
    JSON.stringify(normalizedContent),
    pod.id
  ]);

  const updatedPod = upsertResult.rows[0];

  console.log(`✓ Updated pod: ${updatedPod.name} at ${updatedPod.updated_at}`);

  return {
    status: 'success',
    message: 'Pod content updated from canvas',
    pod: {
      id: updatedPod.id,
      name: updatedPod.name,
      updatedAt: updatedPod.updated_at
    }
  };
}

/**
 * Handle app_mention events
 *
 * This is a placeholder for future interactive features where users
 * can mention the bot in Slack channels.
 *
 * @param {object} event - app_mention event payload
 * @returns {Promise<object>} Result object
 */
async function handleAppMention(event) {
  console.log('App mentioned in channel:', event.channel);

  // TODO: Implement app_mention handling
  // Possible use cases:
  // - @bot update pod <pod-name>
  // - @bot sync all
  // - @bot status

  return {
    status: 'success',
    message: 'App mention acknowledged (not yet implemented)'
  };
}

/**
 * Stub function to fetch canvas content
 *
 * TODO: Replace with actual Slack Files API call
 *
 * Real implementation will:
 * 1. Call files.info to get canvas metadata
 * 2. Call files.content or use url_private_download to get raw content
 * 3. Parse the canvas format (may be JSON or markdown)
 * 4. Return plain text representation
 *
 * @param {string} canvasId - Slack canvas file ID
 * @returns {Promise<string>} Canvas content as text
 */
async function fetchCanvasContentStub(canvasId) {
  // Stub implementation returns example canvas markdown
  console.log(`TODO: Fetch canvas content for ${canvasId} from Slack API`);

  // Return example canvas format
  return `
## Mission
Drive revenue growth and operational efficiency through AI orchestration.

## Initiatives
Name | Status | Owner | Target Date
Pipeline optimization | On Track | Jane Smith | 2026-08-15
Deal acceleration | At Risk | John Doe | 2026-09-30
Revenue forecasting | On Track | Sarah Johnson | 2026-07-31

## Metrics
Value | Label | So What
23% | Pipeline Velocity | Deals moving 23% faster with automation
$2.4M | Additional ARR | Incremental revenue from improved conversion
15hrs/week | Time Saved | Reps spending more time selling

## Next Steps
- Complete pilot rollout to 50 reps by Q3
- Integrate with CRM workflows
- Gather user feedback and iterate
- Prepare business case for enterprise rollout

## Sources
- FY26 Business Case Model
- Q2 Pilot Results
- Salesforce Analytics
  `.trim();
}

module.exports = { handleEvent };
