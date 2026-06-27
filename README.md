# Portfolio Intelligence

> Executive-facing web application for portfolio visibility and intelligence

**Status**: Active Development | **Version**: 1.0.0 | **Last Updated**: June 26, 2026

---

## Overview

Portfolio Intelligence is an internal web application that serves as the **authoritative front door** for product portfolio information at Salesforce. It provides executives, product leaders, and stakeholders with a single, trusted destination for portfolio strategy, metrics, roadmaps, and resources.

### What This Is

- **Product portal** for portfolio intelligence
- **Executive briefing** in web form
- **Strategic dashboard** for decision-makers
- **Content aggregator** connecting to Slack, Drive, and other sources

### What This Is Not

- ❌ Documentation repository
- ❌ Wiki or knowledge base
- ❌ Project management tool
- ❌ Dashboard of dashboards

## Key Features

### Current Features (v1.0)

- ✅ Multi-portfolio support (Agentic Sales Productivity, Engagement Agent)
- ✅ Executive-friendly homepage with business metrics
- ✅ Individual pod detail pages with missions, initiatives, metrics
- ✅ Configuration-driven content (no hardcoded portfolio data)
- ✅ Reusable component library
- ✅ Salesforce-inspired design language
- ✅ Responsive layout for desktop and mobile
- ✅ REST API backend (Express + PostgreSQL)
- ✅ User feedback submission
- ✅ Automated deployment via GitHub Actions

### Planned Features

- 🚧 Slack Canvas integration (automated content publishing)
- 🚧 Google Drive document linking
- 🚧 Real-time content updates
- 🚧 Search functionality
- 🚧 Analytics and usage tracking
- 🚧 Admin UI for content management

## Technology Stack

### Frontend

- **Framework**: React 19+ with React Router v7
- **Styling**: Custom CSS with design tokens (no UI framework)
- **Build**: Create React App
- **Deployment**: GitHub Pages (planned: Cloudflare Pages)
- **CI/CD**: GitHub Actions

### Backend

- **Runtime**: Node.js 18+
- **Framework**: Express
- **Database**: PostgreSQL (Heroku Postgres → Cloudflare D1)
- **Deployment**: Heroku (planned: Cloudflare Workers)
- **API**: RESTful JSON API

### Infrastructure (Current)

- **Source Control**: GitHub
- **Frontend Host**: GitHub Pages
- **Backend Host**: Heroku
- **Database**: Heroku Postgres
- **CI/CD**: GitHub Actions

### Infrastructure (Target)

- **Frontend Host**: Cloudflare Pages
- **Backend**: Cloudflare Workers
- **Database**: Cloudflare D1
- **Queues**: Cloudflare Queues
- **Integrations**: Slack Events API, Google Drive API

## Project Structure

```
pod-intelligence-site/
├── frontend/                 # React application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── api/            # API client functions
│   │   ├── components/     # Reusable UI components
│   │   ├── data/           # Configuration files (pods, portfolios)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Page components
│   │   └── styles/         # Global styles and design tokens
│   └── package.json
│
├── backend/                 # Express API server
│   ├── db/                 # Database schema and migrations
│   ├── routes/             # API route handlers
│   ├── slack/              # Slack webhook handlers
│   ├── normalizer/         # Content normalization logic
│   └── index.js
│
├── docs/                    # Project documentation
│   ├── architecture.md      # System architecture
│   ├── deployment.md        # Deployment guide
│   ├── content-pipeline.md  # Content publishing workflow
│   ├── decisions.md         # Engineering decisions
│   ├── roadmap.md           # Product roadmap
│   └── adr/                 # Architecture Decision Records
│
├── scripts/                 # Deployment and utility scripts
├── .github/workflows/       # CI/CD workflows
├── CLAUDE.md                # Project brief for Claude Code
└── README.md                # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+ (for local backend development)
- Git
- Heroku CLI (for deployment)

### Local Development

#### Frontend Only

```bash
cd frontend
npm install
npm start
```

Runs on `http://localhost:3000`

**Note**: Frontend will use static configuration files from `src/data/` when API is not available.

#### Full Stack (Frontend + Backend)

**Terminal 1 - Backend:**
```bash
cd backend
npm install

# Create database
createdb pod_intelligence

# Apply schema and seed data
psql pod_intelligence < db/schema.sql
psql pod_intelligence < db/seed.sql

# Create .env file
cp .env.example .env
# Edit .env with your configuration

npm run dev
```

Runs on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install

# Create .env file
echo "REACT_APP_API_BASE_URL=http://localhost:5000" > .env

npm start
```

Runs on `http://localhost:3000`

### Environment Variables

**Backend (.env):**
```bash
DATABASE_URL=postgresql://localhost:5432/pod_intelligence
PORT=5000
NODE_ENV=development
SLACK_SIGNING_SECRET=your_slack_signing_secret
SLACK_BOT_TOKEN=xoxb-your-bot-token
ALLOWED_ORIGIN=http://localhost:3000
```

**Frontend (.env):**
```bash
REACT_APP_API_BASE_URL=http://localhost:5000
```

## Configuration

### Adding a New Portfolio

Edit `frontend/src/data/portfolioConfig.js`:

```javascript
{
  id: 'new-portfolio',
  name: 'New Portfolio Name',
  headline: 'Brief description',
  pods: [...]
}
```

### Adding a New Pod

Edit `frontend/src/data/podsConfig.js`:

```javascript
{
  id: 'new-pod',
  name: 'New Pod Name',
  slug: 'new-pod',
  mission: 'Pod mission statement',
  keyInitiatives: [...],
  impactMetrics: [...]
}
```

## Deployment

### Quick Setup (First Time)

```bash
./scripts/deploy-setup.sh
```

This interactive script will:
1. Create Heroku app and PostgreSQL addon
2. Set environment variables
3. Initialize database
4. Guide you through GitHub secrets setup

### Automatic Deployment (CI/CD)

Push to `main` triggers automatic deployment:

- **Frontend** → GitHub Pages
- **Backend** → Heroku

**Required GitHub Secrets:**
- `HEROKU_API_KEY` (get with `heroku auth:token`)
- `HEROKU_APP_NAME` (e.g., `pod-intelligence-api`)
- `HEROKU_EMAIL` (your Heroku account email)

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

## API Documentation

### Endpoints

**Health Check:**
```
GET /health
```

**Get All Pods (lightweight):**
```
GET /api/pods
```
Returns: id, name, groupId, mission, lastSyncedAt

**Get Single Pod (full content):**
```
GET /api/pods/:podId
```
Returns: Complete pod with initiatives, metrics, next steps, sources

**Submit Feedback:**
```
POST /api/feedback
Body: { podId, message, userEmail }
```

**Slack Events Webhook:**
```
POST /slack/events
```
Receives Slack Canvas update events

See [frontend/API_INTEGRATION.md](frontend/API_INTEGRATION.md) for detailed API documentation.

## Design System

Portfolio Intelligence uses a **Salesforce-inspired design language**:

### Design Tokens

All design tokens are defined in `frontend/src/styles/design-tokens.css`:

- **Colors**: Primary blue (#0070D2), neutral grays, semantic colors
- **Typography**: 10-stop scale (11px-48px), SF Pro Display font stack
- **Spacing**: 4px grid system (13 stops: 4px-96px)
- **Shadows**: 5 elevation levels (xs-2xl)
- **Border Radius**: 4 sizes (6px-16px)
- **Transitions**: Fast (150ms), Base (200ms), Slow (300ms)

### Principles

- Light mode only
- Professional, enterprise-focused
- Generous whitespace
- Strong typography hierarchy
- Subtle interactions
- Minimal animation
- Scannable content

## Contributing

### Development Workflow

1. Create feature branch from `main`
2. Make changes (frontend or backend)
3. Test locally
4. Commit with descriptive messages
5. Push and create pull request
6. Automated deployment on merge to `main`

### Code Standards

**React:**
- Functional components with hooks
- Props documented with comments
- Single responsibility per component
- Component-scoped CSS files

**Configuration:**
- Content lives in `data/` directory
- Components never contain hardcoded portfolio content
- Well-commented configuration objects

**Git:**
- Descriptive commit messages
- Small, atomic commits
- Feature branches from `main`

### Adding Documentation

Documentation lives in `/docs`:

- `architecture.md` - System design
- `deployment.md` - Deployment procedures
- `content-pipeline.md` - Content publishing workflow
- `decisions.md` - Engineering decisions
- `roadmap.md` - Product roadmap
- `adr/` - Architecture Decision Records

## Roadmap

### Phase 1: Foundation ✅ (Complete)
- React application with multi-portfolio support
- Configuration-driven architecture
- Express API backend
- PostgreSQL database
- GitHub Actions CI/CD

### Phase 2: Executive Portal 🚧 (In Progress)
- Homepage refinements
- Pod detail page enhancements
- Feedback mechanisms
- Source attribution

### Phase 3: Content Platform 📋 (Planned)
- Admin UI for content management
- Content versioning
- Approval workflows

### Phase 4: Slack Publishing 📋 (Planned)
- Slack Events API integration
- Canvas-to-pod mapping
- Automated content updates

### Phase 5: Google Drive Integration 📋 (Future)
- Document metadata sync
- Resource linking
- Search integration

See [docs/roadmap.md](docs/roadmap.md) for detailed roadmap.

## Architecture

Portfolio Intelligence uses a **configuration-driven architecture** where content is separated from presentation:

```
┌─────────────────────────────────────────────────────────┐
│                   Current Architecture                   │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  GitHub Pages (Frontend)                                 │
│       │                                                   │
│       ↓                                                   │
│  React SPA ← reads → Configuration Files                 │
│       │              (portfolioConfig.js, podsConfig.js) │
│       ↓                                                   │
│  REST API Calls                                          │
│       │                                                   │
│       ↓                                                   │
│  Heroku (Backend)                                        │
│       │                                                   │
│       ↓                                                   │
│  PostgreSQL (Content Store)                              │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Future State:**

```
Slack Canvas → Webhook → Queue → Normalizer → D1 → Cloudflare Workers → Cloudflare Pages
```

See [docs/architecture.md](docs/architecture.md) for complete architecture documentation.

## Resources

- **Project Brief**: [CLAUDE.md](CLAUDE.md)
- **Deployment Guide**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **API Integration**: [frontend/API_INTEGRATION.md](frontend/API_INTEGRATION.md)
- **Architecture**: [docs/architecture.md](docs/architecture.md)
- **Content Pipeline**: [docs/content-pipeline.md](docs/content-pipeline.md)
- **Decisions Log**: [docs/decisions.md](docs/decisions.md)
- **Roadmap**: [docs/roadmap.md](docs/roadmap.md)

## Support

For questions or issues:
- Check documentation in `/docs`
- Review [CLAUDE.md](CLAUDE.md) for project context
- Consult [DEPLOYMENT.md](DEPLOYMENT.md) for deployment issues
- See [frontend/API_INTEGRATION.md](frontend/API_INTEGRATION.md) for API questions

## License

Internal Salesforce project - not for public distribution.

---

**Maintained by**: Portfolio Intelligence Team  
**Last Updated**: June 26, 2026
