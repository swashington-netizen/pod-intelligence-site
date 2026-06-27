# Agentic Sales Productivity Portal

A full-stack portfolio management system for tracking Agentic Sales Productivity initiatives across multiple pods and teams.

## Architecture Overview

This is a monorepo containing both frontend and backend applications designed for production deployment on separate platforms.

```
┌─────────────────────────────────────────────────────────────┐
│                     Architecture Diagram                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  GitHub Pages                Heroku                          │
│  ┌──────────────┐           ┌──────────────┐                │
│  │   Frontend   │           │   Backend    │                │
│  │  (React SPA) │◄─────────►│ (Node/Express)│               │
│  └──────────────┘   REST    └──────┬───────┘                │
│                               API   │                        │
│                                     │                        │
│                            ┌────────▼────────┐               │
│                            │   PostgreSQL    │               │
│                            │ (Content Store) │               │
│                            └─────────────────┘               │
│                                     ▲                         │
│                                     │                        │
│                            ┌────────┴────────┐               │
│                            │  Slack Events   │               │
│                            │   API Webhook   │               │
│                            └─────────────────┘               │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### Components

#### Frontend (`/frontend`)
- **Technology**: React 19+ with React Router
- **Deployment**: GitHub Pages (static hosting)
- **Purpose**: User-facing dashboard for viewing pod information, metrics, and initiatives
- **Features**:
  - Multi-page site with home overview and individual pod detail pages
  - Two-group organizational structure (Agentic Sales Productivity, Engagement Agent)
  - Responsive design with sidebar navigation
  - Feedback submission forms

#### Backend (`/backend`)
- **Technology**: Node.js with Express framework
- **Deployment**: Heroku
- **Purpose**: REST API server and webhook handler
- **Features**:
  - RESTful API endpoints for pod data
  - Slack Events API webhook integration
  - Content management for pod information
  - User feedback collection

#### Database
- **Technology**: PostgreSQL
- **Hosting**: Heroku Postgres (managed database)
- **Purpose**: Persistent storage for pod content, metrics, and user feedback
- **Schema**: 
  - Pods metadata (missions, owners, status)
  - Key initiatives and milestones
  - Impact metrics and KPIs
  - User feedback and comments

#### Slack Integration
- **Events API Webhook**: Receives real-time events from Slack
- **Use Cases**:
  - Post updates to pod channels
  - Notifications for milestone completions
  - Interactive feedback collection
  - Status change alerts

## Project Structure

```
pod-intelligence-site/
├── backend/                 # Node.js/Express API server
│   ├── src/
│   │   ├── routes/         # API route handlers
│   │   ├── models/         # Database models
│   │   ├── controllers/    # Business logic
│   │   └── middleware/     # Express middleware
│   ├── package.json
│   └── server.js           # Entry point
├── frontend/               # React application
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── data/          # Data configuration
│   │   └── styles/        # CSS files
│   └── package.json
├── .gitignore
├── package.json            # Root workspace configuration
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL 14+ (for local development)
- Git

### Local Development

#### Frontend
```bash
cd frontend
npm install
npm start
# Opens on http://localhost:3000
```

#### Backend
```bash
cd backend
npm install
cp .env.example .env
# Configure your DATABASE_URL and SLACK_SIGNING_SECRET
npm run dev
# Runs on http://localhost:5000
```

### Environment Variables

#### Backend (`/backend/.env`)
```
DATABASE_URL=postgresql://localhost:5432/pod_intelligence
PORT=5000
NODE_ENV=development
SLACK_SIGNING_SECRET=your_slack_signing_secret
SLACK_BOT_TOKEN=xoxb-your-bot-token
```

#### Frontend
No environment variables required for local development. Production API URL is configured in the build process.

## Deployment

### Quick Setup (First Time)

Run the interactive setup script:
```bash
./scripts/deploy-setup.sh
```

This will:
- Create Heroku app and database
- Set environment variables
- Guide you through GitHub secrets setup
- Initialize database with schema and seed data

### Automatic Deployment (CI/CD)

Both frontend and backend deploy automatically via GitHub Actions on push to `main`:

**Backend** → Heroku (`https://pod-intelligence-api.herokuapp.com`)  
**Frontend** → GitHub Pages (`https://swashington-netizen.github.io/pod-intelligence-site`)

**Required GitHub Secrets:**
- `HEROKU_API_KEY` - Get with `heroku auth:token`
- `HEROKU_APP_NAME` - Your Heroku app name
- `HEROKU_EMAIL` - Your Heroku account email

### Manual Deployment

**Frontend:**
```bash
cd frontend
npm run deploy
```

**Backend:**
```bash
cd backend
git push heroku main
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment guide.

## API Endpoints

### Pods
- `GET /api/pods` - List all pods
- `GET /api/pods/:slug` - Get pod by slug
- `PUT /api/pods/:slug` - Update pod content (admin)

### Feedback
- `POST /api/feedback` - Submit user feedback
- `GET /api/feedback/:podId` - Get feedback for a pod (admin)

### Slack Webhooks
- `POST /slack/events` - Slack Events API webhook endpoint

## Data Management

Pod content is managed via the `podsConfig.js` file in development. In production:
- Content is stored in PostgreSQL
- Edits made through admin interface or database migrations
- Changes reflected immediately via API

## Contributing

1. Create a feature branch from `main`
2. Make your changes in the appropriate directory (`frontend/` or `backend/`)
3. Test locally
4. Commit with descriptive messages
5. Push and create a pull request

## Tech Stack

**Frontend:**
- React 19
- React Router v6
- CSS3 (custom styling, no framework)

**Backend:**
- Node.js
- Express
- PostgreSQL with pg driver
- Slack Bolt SDK

**DevOps:**
- Git/GitHub
- Heroku
- GitHub Pages
- GitHub Actions (CI/CD)

## License

Internal Salesforce project - not for public distribution.

## Support

For questions or issues, please contact the Agentic Sales Productivity team or submit feedback through the portal.
