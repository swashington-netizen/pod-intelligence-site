# Deployment Configuration Summary

Complete deployment setup for Portfolio Intelligence has been configured and committed.

## What Was Added

### Backend (Heroku) Configuration

1. **`backend/Procfile`**
   ```
   web: node index.js
   ```
   - Tells Heroku how to start the web server

2. **`backend/app.json`**
   - Heroku app configuration for Review Apps
   - Defines all required environment variables
   - Includes PostgreSQL addon (heroku-postgresql:mini)
   - Postdeploy script for automatic database initialization
   - Buildpack: heroku/nodejs

3. **Environment Variables (already in `.env.example`)**
   - `DATABASE_URL` - PostgreSQL connection (auto-set by addon)
   - `PORT` - Server port (auto-set by Heroku)
   - `NODE_ENV` - Set to "production"
   - `SLACK_SIGNING_SECRET` - Slack app signing secret
   - `SLACK_BOT_TOKEN` - Slack bot OAuth token
   - `ALLOWED_ORIGIN` - Frontend URL for CORS

### Frontend (GitHub Pages) Configuration

1. **`frontend/package.json` updates**
   - Added `homepage`: `"https://swashington-netizen.github.io/pod-intelligence-site"`
   - Added scripts:
     - `predeploy`: `"npm run build"`
     - `deploy`: `"gh-pages -d build"`
   - Added dev dependency: `gh-pages@^6.1.1`

2. **`frontend/.env.example` updates**
   - Clarified production API URL
   - Example: `https://pod-intelligence-api.herokuapp.com`

### GitHub Actions CI/CD Workflows

1. **`.github/workflows/deploy-frontend.yml`**
   - **Triggers**: Push to `main` with `frontend/` changes, or manual trigger
   - **Steps**:
     1. Checkout code
     2. Setup Node.js 18
     3. Install dependencies (`npm ci`)
     4. Create production `.env` with Heroku API URL
     5. Build React app (`npm run build`)
     6. Deploy to GitHub Pages (`gh-pages`)
   - **Secrets**: Uses default `GITHUB_TOKEN` (no setup needed)

2. **`.github/workflows/deploy-backend.yml`**
   - **Triggers**: Push to `main` with `backend/` changes, or manual trigger
   - **Steps**:
     1. Checkout code
     2. Deploy to Heroku using `heroku-deploy` action
     3. Database migrations via postdeploy script
   - **Required Secrets**:
     - `HEROKU_API_KEY`
     - `HEROKU_APP_NAME`
     - `HEROKU_EMAIL`

### Deployment Scripts

1. **`scripts/deploy-setup.sh`** (executable)
   - Interactive first-time deployment setup
   - Creates Heroku app
   - Adds PostgreSQL addon
   - Sets environment variables
   - Guides through GitHub secrets setup
   - Initializes database

2. **`scripts/README.md`**
   - Documentation for deployment scripts

### Documentation

1. **`DEPLOYMENT.md`** (600+ lines)
   - Complete deployment guide
   - Backend deployment (Heroku)
   - Frontend deployment (GitHub Pages)
   - GitHub Actions workflows
   - Environment variables reference
   - Troubleshooting guide
   - Production checklist
   - Cost estimation
   - Rollback procedures

2. **`README.md` updates**
   - Quick deployment instructions
   - Links to comprehensive guide

## How to Deploy

### Option 1: Automated Setup (Recommended)

```bash
# Run interactive setup script
./scripts/deploy-setup.sh

# Follow prompts to configure:
# - Heroku app name
# - GitHub Pages URL
# - Slack credentials

# Add GitHub secrets (prompted by script):
# 1. Go to GitHub Settings → Secrets → Actions
# 2. Add: HEROKU_API_KEY, HEROKU_APP_NAME, HEROKU_EMAIL

# Push to main (triggers automatic deployment)
git push origin main
```

### Option 2: Manual Setup

**Backend:**
```bash
# Create Heroku app
heroku create pod-intelligence-api

# Add PostgreSQL
heroku addons:create heroku-postgresql:mini -a pod-intelligence-api

# Set environment variables
heroku config:set NODE_ENV=production -a pod-intelligence-api
heroku config:set ALLOWED_ORIGIN=https://swashington-netizen.github.io -a pod-intelligence-api
heroku config:set SLACK_SIGNING_SECRET=your_secret -a pod-intelligence-api
heroku config:set SLACK_BOT_TOKEN=xoxb-your-token -a pod-intelligence-api

# Deploy
cd backend
git push heroku main

# Initialize database
heroku run psql \$DATABASE_URL < db/schema.sql -a pod-intelligence-api
heroku run psql \$DATABASE_URL < db/seed.sql -a pod-intelligence-api
```

**Frontend:**
```bash
# Install gh-pages
cd frontend
npm install

# Create production .env
echo "REACT_APP_API_BASE_URL=https://pod-intelligence-api.herokuapp.com" > .env.production

# Deploy
npm run deploy
```

**GitHub Actions:**
```bash
# Add secrets at: github.com/USER/REPO/settings/secrets/actions
# - HEROKU_API_KEY: Run 'heroku auth:token'
# - HEROKU_APP_NAME: pod-intelligence-api
# - HEROKU_EMAIL: your@email.com

# Push to trigger automatic deployment
git push origin main
```

## Deployment Flow

```
Developer pushes to main
         │
         ↓
GitHub Actions detects changes
         │
         ├──────────────────┬─────────────────┐
         ↓                  ↓                 ↓
    frontend/           backend/          other/
    changes?            changes?          (skip)
         │                  │
         ↓                  ↓
deploy-frontend.yml   deploy-backend.yml
         │                  │
         ↓                  ↓
Build React app      Deploy to Heroku
         │                  │
         ↓                  ↓
Deploy to            Run postdeploy
GitHub Pages         (init database)
         │                  │
         ↓                  ↓
swashington-         pod-intelligence-
netizen.github.io    api.herokuapp.com
```

## Required GitHub Secrets

Add these at: `https://github.com/swashington-netizen/pod-intelligence-site/settings/secrets/actions`

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `HEROKU_API_KEY` | Heroku authentication token | Run `heroku auth:token` |
| `HEROKU_APP_NAME` | Name of Heroku app | `pod-intelligence-api` |
| `HEROKU_EMAIL` | Heroku account email | Your login email |

## Deployment URLs

**Production:**
- Frontend: `https://swashington-netizen.github.io/pod-intelligence-site`
- Backend: `https://pod-intelligence-api.herokuapp.com`

**Health Check:**
```bash
curl https://pod-intelligence-api.herokuapp.com/health
```

**Test API:**
```bash
curl https://pod-intelligence-api.herokuapp.com/api/pods
```

## Verification Checklist

After deployment:

### Backend
- [ ] Health endpoint returns 200 OK
- [ ] `/api/pods` returns pod data
- [ ] `/api/pods/:podId` returns single pod
- [ ] Database has 10 seed pods
- [ ] Environment variables are set
- [ ] CORS allows GitHub Pages origin
- [ ] Logs show no errors

### Frontend
- [ ] Site loads at GitHub Pages URL
- [ ] Homepage displays pod grid
- [ ] Pods are fetched from Heroku API
- [ ] Pod detail pages load
- [ ] Feedback form submits
- [ ] No console errors

### GitHub Actions
- [ ] Workflows exist in Actions tab
- [ ] Secrets are configured
- [ ] Frontend workflow succeeds
- [ ] Backend workflow succeeds
- [ ] Deployments trigger on push

## Troubleshooting

### "Application Error" on Heroku
```bash
# Check logs
heroku logs --tail -a pod-intelligence-api

# Verify environment variables
heroku config -a pod-intelligence-api

# Restart app
heroku restart -a pod-intelligence-api
```

### Frontend 404 on GitHub Pages
```bash
# Verify gh-pages branch exists
git branch -r | grep gh-pages

# Check GitHub Pages settings
# Settings → Pages → Source: gh-pages branch

# Redeploy
cd frontend && npm run deploy
```

### GitHub Actions Failing
- Verify secrets are added correctly
- Check workflow logs in Actions tab
- Ensure branch is `main` (not `master`)
- Verify Heroku API key is valid

## Cost Breakdown

**Heroku:**
- Basic Dyno: $7/month
- PostgreSQL Mini: $0-5/month
- **Total: ~$7-12/month**

**GitHub Pages:**
- Free for public repositories

**Total Monthly Cost: ~$7-12**

## Next Steps

1. **Run setup script**: `./scripts/deploy-setup.sh`
2. **Add GitHub secrets** (prompted by script)
3. **Push to main**: `git push origin main`
4. **Verify deployment**:
   - Backend: `curl https://pod-intelligence-api.herokuapp.com/health`
   - Frontend: Visit `https://swashington-netizen.github.io/pod-intelligence-site`
5. **Configure Slack webhook** (point to Heroku URL)
6. **Monitor logs**: `heroku logs --tail -a pod-intelligence-api`

## Documentation

- **Complete guide**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Scripts**: [scripts/README.md](scripts/README.md)
- **API integration**: [frontend/API_INTEGRATION.md](frontend/API_INTEGRATION.md)
- **Project brief**: [CLAUDE.md](CLAUDE.md)

## Support

For deployment issues:
- Check [DEPLOYMENT.md](DEPLOYMENT.md) troubleshooting section
- Review Heroku logs: `heroku logs --tail -a APP_NAME`
- Check GitHub Actions logs in Actions tab
- Verify all environment variables and secrets

---

**Status**: ✅ Deployment configuration complete and committed  
**Ready for**: First-time deployment via `./scripts/deploy-setup.sh`
