# Deployment Scripts

Utility scripts for deploying Portfolio Intelligence.

## deploy-setup.sh

Interactive script to configure deployment for the first time.

**What it does:**
1. Creates Heroku app
2. Adds PostgreSQL addon
3. Sets environment variables
4. Guides you through GitHub secrets setup
5. Initializes database with schema and seed data
6. Creates production .env for frontend

**Usage:**
```bash
./scripts/deploy-setup.sh
```

**Prerequisites:**
- Heroku CLI installed (`brew install heroku`)
- Git repository initialized
- Heroku account credentials

**Interactive Prompts:**
- Heroku app name (default: pod-intelligence-api)
- GitHub Pages URL
- Slack Signing Secret
- Slack Bot Token

**After running:**
1. Add GitHub secrets (HEROKU_API_KEY, HEROKU_APP_NAME, HEROKU_EMAIL)
2. Push to main branch to trigger deployments
3. Verify backend: `curl https://your-app.herokuapp.com/health`
4. Visit frontend: `https://username.github.io/repo`

## Manual Deployment

If you prefer manual deployment, see [DEPLOYMENT.md](../DEPLOYMENT.md) for detailed instructions.
