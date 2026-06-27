# Database Schema

This directory contains SQL files for the Portfolio Intelligence database schema.

## Files

### `schema.sql`
Defines the database structure for storing pod content.

**Tables:**
- `pods` - Stores pod information with JSONB content column

**Indexes:**
- `pods_group_idx` - Query pods by portfolio group
- `pods_canvas_idx` - Look up pods by Slack Canvas ID

### `seed.sql`
Initial seed data for all 10 pods across both portfolios.

**Portfolios:**
- Agentic Sales Productivity (6 pods)
- Engagement Agent for SDRs & BDRs (4 pods)

## Usage

### PostgreSQL (Development)

```bash
# Create database
createdb pod_intelligence

# Apply schema
psql pod_intelligence < schema.sql

# Load seed data
psql pod_intelligence < seed.sql

# Verify
psql pod_intelligence -c "SELECT id, name FROM pods ORDER BY group_id, name;"
```

### Cloudflare D1 (Production - Future)

```bash
# Create database
wrangler d1 create pod-intelligence

# Apply schema
wrangler d1 execute pod-intelligence --file=schema.sql

# Load seed data
wrangler d1 execute pod-intelligence --file=seed.sql

# Verify
wrangler d1 execute pod-intelligence --command="SELECT id, name FROM pods;"
```

## Content Structure

The `content` JSONB column stores:

```json
{
  "mission": "Pod mission statement",
  "initiatives": [
    {
      "name": "Initiative name",
      "status": "On Track | At Risk | Blocked | Complete",
      "owner": "Owner name",
      "targetDate": "YYYY-MM-DD"
    }
  ],
  "metrics": [
    {
      "value": "Display value (23%, $2.4M, etc.)",
      "label": "Metric label",
      "soWhat": "Business context explaining why it matters"
    }
  ],
  "nextSteps": ["Step 1", "Step 2"],
  "sources": ["Source 1", "Source 2"],
  "lastEditedBy": "email or Slack user ID",
  "lastEditedAt": "ISO 8601 timestamp"
}
```

## Migration from Frontend Config

Current state: Pod data lives in `frontend/src/data/podsConfig.js`

Future state: Pod data lives in database, updated via Slack Canvas webhooks

Migration path:
1. ✅ Schema and seed data created
2. Create API endpoints to read from database
3. Update frontend to fetch from API instead of config file
4. Implement Slack webhook handler
5. Deprecate frontend config files
