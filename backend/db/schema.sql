-- Portfolio Intelligence Database Schema
-- Purpose: Store pod content driven from Slack Canvas and other sources
-- Last Updated: June 26, 2026

-- ============================================================
-- PODS TABLE
-- ============================================================
-- Stores all pod information including mission, initiatives, metrics, and metadata
-- Content is normalized from Slack Canvas events and other content sources

CREATE TABLE IF NOT EXISTS pods (
  id            TEXT PRIMARY KEY,           -- e.g. "slack-agentforce-for-sales"
  group_id      TEXT NOT NULL,              -- "agentic-sales-productivity" or "engagement-agent-sdrs-bdrs"
  name          TEXT NOT NULL,              -- display name
  content       JSONB NOT NULL DEFAULT '{}',-- full pod content (see shape below)
  canvas_id     TEXT,                       -- Slack canvas file ID that drives this pod
  last_synced_at TIMESTAMPTZ,              -- when webhook last updated this pod
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- INDEXES
-- ============================================================

-- Index for querying pods by group (portfolio)
CREATE INDEX IF NOT EXISTS pods_group_idx ON pods(group_id);

-- Index for looking up pods by their Slack Canvas ID
CREATE INDEX IF NOT EXISTS pods_canvas_idx ON pods(canvas_id);

-- ============================================================
-- CONTENT JSONB SCHEMA
-- ============================================================
-- The content column stores pod information in this structure:
--
-- {
--   "mission": "string",
--   "initiatives": [
--     {
--       "name": "string",
--       "status": "On Track | At Risk | Blocked | Complete",
--       "owner": "string",
--       "targetDate": "YYYY-MM-DD"
--     }
--   ],
--   "metrics": [
--     {
--       "value": "string",
--       "label": "string",
--       "soWhat": "string"
--     }
--   ],
--   "nextSteps": ["string"],
--   "sources": ["string"],
--   "lastEditedBy": "string",
--   "lastEditedAt": "string"
-- }
--
-- Notes:
-- - initiatives.status values: "On Track", "At Risk", "Blocked", "Complete"
-- - metrics.value: Display value (e.g. "23%", "$2.4M", "3.5x")
-- - metrics.soWhat: Business context explaining why the metric matters
-- - sources: Array of source attributions for content (e.g. "FY26 Business Case")
-- - lastEditedBy: Slack user ID or email of last editor
-- - lastEditedAt: ISO 8601 timestamp of last edit
