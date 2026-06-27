# Backend API Server

Node.js/Express backend for the Agentic Sales Productivity Portal.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
   - `DATABASE_URL` - PostgreSQL connection string
   - `SLACK_SIGNING_SECRET` - From Slack App settings
   - `SLACK_BOT_TOKEN` - From Slack App OAuth

4. Run development server:
```bash
npm run dev
```

Server runs on `http://localhost:5000`

## API Endpoints

### Pods
- `GET /api/pods` - List all pods
- `GET /api/pods/:slug` - Get specific pod
- `PUT /api/pods/:slug` - Update pod (admin)

### Feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback/:podId` - Get pod feedback (admin)

### Slack
- `POST /slack/events` - Slack Events API webhook

### Health
- `GET /health` - Health check endpoint

## Database Schema

Run migrations to set up tables:
```bash
npm run migrate
```

## Deployment

Deploy to Heroku:
```bash
heroku create pod-intelligence-api
heroku addons:create heroku-postgresql:mini
heroku config:set SLACK_SIGNING_SECRET=xxx
git push heroku main
```

## Testing

```bash
npm test
```
