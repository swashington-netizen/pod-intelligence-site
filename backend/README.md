# Portfolio Intelligence Backend

Express API server that provides pod data endpoints and handles Slack Canvas webhook events.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Backend Flow                         │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  Slack Canvas Update                                     │
│         │                                                │
│         ↓                                                │
│  POST /slack/events                                      │
│         │                                                │
│         ↓                                                │
│  verifySignature (HMAC-SHA256)                           │
│         │                                                │
│         ↓                                                │
│  eventHandler                                            │
│         │                                                │
│         ├─→ Lookup pod by canvas_id                      │
│         ├─→ Fetch canvas content (TODO)                  │
│         ├─→ normalize(rawText, existingContent)          │
│         └─→ Upsert into pods table                       │
│                                                           │
│  Frontend Request                                        │
│         │                                                │
│         ↓                                                │
│  GET /api/pods (or /api/pods/:podId)                     │
│         │                                                │
│         ↓                                                │
│  Query PostgreSQL                                        │
│         │                                                │
│         ↓                                                │
│  Return JSON                                             │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

## Project Structure

```
backend/
├── index.js                    # Express server entry point
├── package.json                # Dependencies and scripts
├── .env.example                # Environment variables template
│
├── db/
│   ├── client.js               # PostgreSQL connection pool
│   ├── schema.sql              # Database table definitions
│   ├── seed.sql                # Initial pod data
│   └── README.md               # Database documentation
│
├── slack/
│   ├── verifySignature.js      # HMAC-SHA256 signature verification
│   └── eventHandler.js         # Process Slack events
│
└── normalizer/
    └── index.js                # Parse canvas text → structured JSONB
```

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```bash
# Database
DATABASE_URL=postgresql://localhost:5432/pod_intelligence

# Server
PORT=5000
NODE_ENV=development

# Slack Integration
SLACK_SIGNING_SECRET=your_slack_signing_secret_here
SLACK_BOT_TOKEN=xoxb-your-bot-token-here

# CORS - Frontend origin
ALLOWED_ORIGIN=http://localhost:3000
```

### 3. Set Up Database

```bash
# Create database
createdb pod_intelligence

# Apply schema
psql pod_intelligence < db/schema.sql

# Load seed data
psql pod_intelligence < db/seed.sql

# Verify
psql pod_intelligence -c "SELECT id, name FROM pods;"
```

### 4. Start Server

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server will start on `http://localhost:5000` (or PORT from .env).

## API Endpoints

### Health Check

```http
GET /health
```

Returns server status and uptime.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-06-26T20:00:00.000Z",
  "uptime": 123.456
}
```

### Get All Pods

```http
GET /api/pods
```

Returns all pods across all portfolios.

**Response:**
```json
{
  "success": true,
  "count": 10,
  "pods": [
    {
      "id": "smb-revenue-orchestration",
      "group_id": "agentic-sales-productivity",
      "name": "SMB Revenue Orchestration (RIS)",
      "content": {
        "mission": "...",
        "initiatives": [...],
        "metrics": [...],
        "nextSteps": [...],
        "sources": [...]
      },
      "canvas_id": "F12345ABC",
      "last_synced_at": "2026-06-26T19:00:00.000Z",
      "updated_at": "2026-06-26T19:00:00.000Z"
    }
  ]
}
```

### Get Single Pod

```http
GET /api/pods/:podId
```

Returns a single pod by ID (e.g., `/api/pods/smb-revenue-orchestration`).

**Response:**
```json
{
  "success": true,
  "pod": {
    "id": "smb-revenue-orchestration",
    "group_id": "agentic-sales-productivity",
    "name": "SMB Revenue Orchestration (RIS)",
    "content": { ... },
    "canvas_id": "F12345ABC",
    "last_synced_at": "2026-06-26T19:00:00.000Z",
    "updated_at": "2026-06-26T19:00:00.000Z"
  }
}
```

### Slack Events Webhook

```http
POST /slack/events
```

Receives events from Slack (canvas updates, app mentions).

**Handled Events:**
- `file_change` - Canvas updates (file_type: "quip")
- `app_mention` - Bot mentions in channels (placeholder)

**Flow:**
1. Verify HMAC-SHA256 signature
2. Handle URL verification challenge
3. Extract canvas file ID
4. Look up pod by canvas_id
5. Fetch canvas content (TODO: implement)
6. Normalize content into structured format
7. Upsert into pods table
8. Return 200 OK immediately

## Content Normalizer

The normalizer (`normalizer/index.js`) is a **pure function** that transforms raw canvas text into structured JSONB content.

### Expected Canvas Format

```markdown
## Mission
Pod mission statement here.

## Initiatives
Name | Status | Owner | Target Date
Pipeline optimization | On Track | Jane Smith | 2026-08-15
Deal acceleration | At Risk | John Doe | 2026-09-30

## Metrics
Value | Label | So What
23% | Pipeline Velocity | Deals moving faster
$2.4M | Additional ARR | Incremental revenue

## Next Steps
- Complete pilot rollout
- Integrate with CRM
- Gather feedback

## Sources
- FY26 Business Case
- Q2 Pilot Results
```

## Deployment

### Heroku

```bash
# Create app
heroku create pod-intelligence-api

# Add PostgreSQL
heroku addons:create heroku-postgresql:mini

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set SLACK_SIGNING_SECRET=your_secret
heroku config:set SLACK_BOT_TOKEN=your_token
heroku config:set ALLOWED_ORIGIN=https://swashington-netizen.github.io

# Deploy
git push heroku main

# Apply schema
heroku pg:psql < db/schema.sql

# Load seed data
heroku pg:psql < db/seed.sql
```

## TODO

- [ ] Implement `fetchCanvasContent()` using Slack Files API
- [ ] Add unit tests for normalizer
- [ ] Add integration tests for API endpoints
- [ ] Add authentication for API endpoints
- [ ] Migrate to Cloudflare Workers + D1
