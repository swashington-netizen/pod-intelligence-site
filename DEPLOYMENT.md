# Deployment Guide

Complete deployment instructions for Portfolio Intelligence to Heroku (backend) and GitHub Pages (frontend).

## Overview

```
┌─────────────────────────────────────────────────────────┐
│                  Deployment Architecture                 │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  GitHub Repository (main branch)                         │
│         │                                                │
│         ├─────────────────┬──────────────────────┐       │
│         ↓                 ↓                      ↓       │
│   GitHub Actions    GitHub Actions        Heroku Git    │
│   (Frontend CI)     (Backend CI)          (Manual)      │
│         │                 │                      │       │
│         ↓                 ↓                      ↓       │
│   GitHub Pages      Heroku Deploy          Heroku       │
│   (Static Site)     Action                 Platform     │
│         │                 │                      │       │
│         ↓                 ↓                      ↓       │
│  swashington-       pod-intelligence-    pod-intel...   │
│  netizen.github.io  api.herokuapp.com   .herokuapp.com  │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

## Prerequisites

### Required Accounts
- [x] GitHub account with repository access
- [x] Heroku account (free or paid tier)

### Required CLI Tools
```bash
# Heroku CLI
brew tap heroku/brew && brew install heroku

# Verify installation
heroku --version

# GitHub CLI (optional, for testing)
brew install gh
```

## Part 1: Backend Deployment (Heroku)

### Option A: Automatic Deployment via GitHub Actions (Recommended)

#### 1. Create Heroku App

```bash
# Login to Heroku
heroku login

# Create app
heroku create pod-intelligence-api

# Add PostgreSQL addon
heroku addons:create heroku-postgresql:mini -a pod-intelligence-api

# Verify
heroku apps:info -a pod-intelligence-api
```

#### 2. Set Environment Variables

```bash
# Set required environment variables
heroku config:set NODE_ENV=production -a pod-intelligence-api
heroku config:set ALLOWED_ORIGIN=https://swashington-netizen.github.io -a pod-intelligence-api

# Set Slack credentials (get from api.slack.com/apps)
heroku config:set SLACK_SIGNING_SECRET=your_slack_signing_secret -a pod-intelligence-api
heroku config:set SLACK_BOT_TOKEN=xoxb-your-bot-token -a pod-intelligence-api

# Verify
heroku config -a pod-intelligence-api
```

#### 3. Configure GitHub Secrets

Go to GitHub repository → Settings → Secrets and variables → Actions → New repository secret

Add these secrets:

**HEROKU_API_KEY**
```bash
# Get your Heroku API key
heroku auth:token
```
Copy the token and add as `HEROKU_API_KEY`

**HEROKU_APP_NAME**
```
pod-intelligence-api
```

**HEROKU_EMAIL**
```
your-email@example.com
```

#### 4. Trigger Deployment

```bash
# Push to main branch (triggers GitHub Actions)
git push origin main

# Or manually trigger from GitHub Actions tab
```

Watch deployment progress at: `https://github.com/swashington-netizen/pod-intelligence-site/actions`

#### 5. Initialize Database

Database schema and seed data are automatically applied via the `postdeploy` script in `app.json`.

To manually run:
```bash
heroku run psql \$DATABASE_URL < backend/db/schema.sql -a pod-intelligence-api
heroku run psql \$DATABASE_URL < backend/db/seed.sql -a pod-intelligence-api
```

#### 6. Verify Backend Deployment

```bash
# Health check
curl https://pod-intelligence-api.herokuapp.com/health

# Should return:
# {"status":"ok","timestamp":"2026-06-26T20:00:00.000Z","uptime":123.456}

# Test API
curl https://pod-intelligence-api.herokuapp.com/api/pods

# View logs
heroku logs --tail -a pod-intelligence-api
```

### Option B: Manual Deployment

```bash
# Navigate to backend directory
cd backend

# Login to Heroku
heroku login

# Create app
heroku create pod-intelligence-api

# Add PostgreSQL
heroku addons:create heroku-postgresql:mini

# Set environment variables (see Option A step 2)

# Add Heroku remote
heroku git:remote -a pod-intelligence-api

# Deploy
git subtree push --prefix backend heroku main

# Or from backend directory
git push heroku main

# Run database migrations
heroku run psql \$DATABASE_URL < db/schema.sql
heroku run psql \$DATABASE_URL < db/seed.sql
```

## Part 2: Frontend Deployment (GitHub Pages)

### Option A: Automatic Deployment via GitHub Actions (Recommended)

Deployment is fully automated. On every push to `main` that touches `frontend/` files, GitHub Actions will:

1. Build the React app
2. Deploy to GitHub Pages (`gh-pages` branch)

#### Prerequisites

Ensure GitHub Pages is enabled:
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `/ (root)`

#### Verify Deployment

After pushing to main:
1. Check Actions tab for "Deploy Frontend to GitHub Pages" workflow
2. Visit: `https://swashington-netizen.github.io/pod-intelligence-site`

### Option B: Manual Deployment

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create production .env
echo "REACT_APP_API_BASE_URL=https://pod-intelligence-api.herokuapp.com" > .env.production

# Build and deploy
npm run deploy

# This runs:
# 1. npm run build (creates optimized production build)
# 2. gh-pages -d build (deploys to gh-pages branch)
```

## Part 3: Verify Full Integration

### 1. Check Backend Health

```bash
curl https://pod-intelligence-api.herokuapp.com/health
```

Expected:
```json
{
  "status": "ok",
  "timestamp": "2026-06-26T20:00:00.000Z",
  "uptime": 123.456
}
```

### 2. Check API Endpoints

```bash
# Get all pods
curl https://pod-intelligence-api.herokuapp.com/api/pods

# Get single pod
curl https://pod-intelligence-api.herokuapp.com/api/pods/smb-revenue-orchestration

# Submit feedback
curl -X POST https://pod-intelligence-api.herokuapp.com/api/feedback \
  -H "Content-Type: application/json" \
  -d '{"podId":"smb-revenue-orchestration","message":"Test feedback"}'
```

### 3. Check Frontend

Visit: `https://swashington-netizen.github.io/pod-intelligence-site`

**Expected behavior:**
- Homepage loads with pod grid
- Pods are fetched from Heroku API
- Clicking a pod loads detail page
- Feedback form submits successfully

### 4. Check CORS

Open browser console (F12) and verify:
- No CORS errors
- Network requests show `Access-Control-Allow-Origin` header
- API requests complete successfully

### 5. Check Caching

In Network tab (F12):
- API requests should show `Cache-Control: public, max-age=60`
- Subsequent requests within 60 seconds should be cached

## GitHub Actions Workflows

### Frontend Deployment Workflow

**File:** `.github/workflows/deploy-frontend.yml`

**Triggers:**
- Push to `main` with changes in `frontend/` directory
- Manual trigger via GitHub Actions UI

**Steps:**
1. Checkout code
2. Setup Node.js 18
3. Install dependencies (`npm ci`)
4. Create production `.env` with Heroku API URL
5. Build React app (`npm run build`)
6. Deploy to GitHub Pages (`npm run deploy`)

**Secrets required:** None (uses default `GITHUB_TOKEN`)

### Backend Deployment Workflow

**File:** `.github/workflows/deploy-backend.yml`

**Triggers:**
- Push to `main` with changes in `backend/` directory
- Manual trigger via GitHub Actions UI

**Steps:**
1. Checkout code
2. Deploy to Heroku using `heroku-deploy` action
3. Database migrations via postdeploy script

**Secrets required:**
- `HEROKU_API_KEY`
- `HEROKU_APP_NAME`
- `HEROKU_EMAIL`

## Environment Variables

### Backend (Heroku)

| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `NODE_ENV` | Node environment | `production` | Yes |
| `PORT` | Server port | `5000` (auto-set by Heroku) | No |
| `DATABASE_URL` | PostgreSQL connection | Auto-set by addon | No |
| `SLACK_SIGNING_SECRET` | Slack app signing secret | `abc123...` | Yes |
| `SLACK_BOT_TOKEN` | Slack bot OAuth token | `xoxb-...` | Yes |
| `ALLOWED_ORIGIN` | CORS allowed origin | `https://swashington-netizen.github.io` | Yes |

### Frontend (Build-time)

| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `REACT_APP_API_BASE_URL` | Backend API URL | `https://pod-intelligence-api.herokuapp.com` | Yes |

## Troubleshooting

### Backend Issues

#### "Application Error" on Heroku

**Check logs:**
```bash
heroku logs --tail -a pod-intelligence-api
```

**Common causes:**
- Missing environment variables
- Database connection failure
- Port binding issue

**Fix:**
```bash
# Verify all env vars are set
heroku config -a pod-intelligence-api

# Restart app
heroku restart -a pod-intelligence-api
```

#### Database Connection Error

**Check database:**
```bash
heroku pg:info -a pod-intelligence-api
```

**Run migrations manually:**
```bash
heroku run psql \$DATABASE_URL < backend/db/schema.sql -a pod-intelligence-api
```

#### CORS Errors

**Verify ALLOWED_ORIGIN:**
```bash
heroku config:get ALLOWED_ORIGIN -a pod-intelligence-api
```

Should match: `https://swashington-netizen.github.io`

**Update if wrong:**
```bash
heroku config:set ALLOWED_ORIGIN=https://swashington-netizen.github.io -a pod-intelligence-api
```

### Frontend Issues

#### "Failed to fetch pods" Error

**Check:**
1. Backend is running: `curl https://pod-intelligence-api.herokuapp.com/health`
2. CORS is configured correctly
3. API URL in frontend is correct

**Verify .env.production:**
```bash
cd frontend
cat .env.production
# Should show: REACT_APP_API_BASE_URL=https://pod-intelligence-api.herokuapp.com
```

#### GitHub Pages 404 Error

**Check:**
1. `gh-pages` branch exists
2. GitHub Pages is enabled in Settings
3. `homepage` in `package.json` matches repository URL

**Redeploy:**
```bash
cd frontend
npm run deploy
```

#### Blank Page on GitHub Pages

**Common causes:**
- Incorrect `homepage` in `package.json`
- Build errors
- JavaScript errors in browser console

**Debug:**
```bash
# Build locally and check for errors
npm run build

# Serve locally to test
npx serve -s build
```

### GitHub Actions Issues

#### Workflow Not Triggering

**Check:**
1. Workflow file is in `.github/workflows/`
2. YAML syntax is valid
3. Branch is `main` (not `master`)

**Manually trigger:**
- Go to Actions tab
- Select workflow
- Click "Run workflow"

#### Heroku Deploy Failing

**Check secrets:**
1. GitHub Settings → Secrets → Actions
2. Verify `HEROKU_API_KEY`, `HEROKU_APP_NAME`, `HEROKU_EMAIL` exist
3. API key is valid: `heroku auth:token`

## Monitoring

### Backend Monitoring

```bash
# View logs
heroku logs --tail -a pod-intelligence-api

# Check dyno status
heroku ps -a pod-intelligence-api

# View metrics (paid dynos only)
heroku metrics -a pod-intelligence-api
```

### Frontend Monitoring

- GitHub Pages doesn't provide logs
- Use browser DevTools to debug
- Add analytics (Google Analytics, Plausible) if needed

## Rollback

### Backend Rollback

```bash
# View releases
heroku releases -a pod-intelligence-api

# Rollback to previous version
heroku rollback v123 -a pod-intelligence-api
```

### Frontend Rollback

```bash
# Checkout previous commit
git checkout <commit-hash>

# Redeploy
cd frontend
npm run deploy
```

## Cost Estimation

### Heroku (Backend)

**Basic Dyno** ($7/month):
- 1 web dyno
- PostgreSQL Mini addon (free or $5/month)
- Total: ~$7-12/month

**Free Tier** (Limited):
- Dyno sleeps after 30 min inactivity
- 1000 free dyno hours/month
- Total: $0/month (hobby projects)

### GitHub Pages (Frontend)

**Free** for public repositories

## Production Checklist

Before going live:

### Backend
- [ ] Set all required environment variables
- [ ] Database schema and seed data loaded
- [ ] Health endpoint returns 200 OK
- [ ] API endpoints return correct data
- [ ] Slack webhook configured (if using)
- [ ] CORS configured for frontend domain
- [ ] Logs show no errors

### Frontend
- [ ] Production build succeeds without warnings
- [ ] API URL points to production backend
- [ ] GitHub Pages enabled and serving content
- [ ] Homepage loads and displays pods
- [ ] Pod detail pages work
- [ ] Feedback form submits successfully
- [ ] No console errors in browser

### GitHub Actions
- [ ] Secrets configured
- [ ] Workflows run successfully
- [ ] Deployments complete without errors

## Next Steps

After successful deployment:

1. **Set up monitoring** - Add error tracking (Sentry) and uptime monitoring
2. **Configure Slack app** - Point webhook to Heroku endpoint
3. **Add custom domain** - Configure DNS for custom domain (optional)
4. **Enable HTTPS** - Heroku provides automatic SSL
5. **Set up staging environment** - Create separate Heroku app for testing

## Support

For deployment issues:
- Backend: Check Heroku logs and documentation
- Frontend: Check GitHub Actions logs
- Integration: Verify CORS and API connectivity

For Heroku support: https://help.heroku.com/  
For GitHub Pages support: https://docs.github.com/en/pages
