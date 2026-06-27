#!/bin/bash

# Portfolio Intelligence Deployment Setup Script
# Run this script to configure deployment for the first time

set -e  # Exit on error

echo "====================================="
echo "Portfolio Intelligence Deploy Setup"
echo "====================================="
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Heroku CLI is installed
if ! command -v heroku &> /dev/null; then
    echo -e "${RED}Error: Heroku CLI not found${NC}"
    echo "Install with: brew tap heroku/brew && brew install heroku"
    exit 1
fi

echo -e "${GREEN}✓ Heroku CLI found${NC}"
echo ""

# Login to Heroku
echo "Logging in to Heroku..."
heroku login

echo ""
echo "====================================="
echo "Step 1: Backend (Heroku)"
echo "====================================="
echo ""

# Prompt for app name
read -p "Enter Heroku app name (default: pod-intelligence-api): " APP_NAME
APP_NAME=${APP_NAME:-pod-intelligence-api}

echo ""
echo "Creating Heroku app: $APP_NAME"
heroku create $APP_NAME || echo -e "${YELLOW}App may already exist${NC}"

echo ""
echo "Adding PostgreSQL addon..."
heroku addons:create heroku-postgresql:mini -a $APP_NAME || echo -e "${YELLOW}Addon may already exist${NC}"

echo ""
echo "Setting environment variables..."

# Set NODE_ENV
heroku config:set NODE_ENV=production -a $APP_NAME

# Prompt for GitHub Pages URL
read -p "Enter GitHub Pages URL (e.g., https://username.github.io/repo): " PAGES_URL
heroku config:set ALLOWED_ORIGIN=$PAGES_URL -a $APP_NAME

# Prompt for Slack credentials
echo ""
echo "Get Slack credentials from: https://api.slack.com/apps"
read -p "Enter Slack Signing Secret: " SLACK_SECRET
heroku config:set SLACK_SIGNING_SECRET=$SLACK_SECRET -a $APP_NAME

read -p "Enter Slack Bot Token (starts with xoxb-): " SLACK_TOKEN
heroku config:set SLACK_BOT_TOKEN=$SLACK_TOKEN -a $APP_NAME

echo ""
echo -e "${GREEN}✓ Backend configuration complete${NC}"

echo ""
echo "====================================="
echo "Step 2: GitHub Secrets"
echo "====================================="
echo ""

echo "You need to add these secrets to GitHub:"
echo ""
echo "1. Go to: https://github.com/swashington-netizen/pod-intelligence-site/settings/secrets/actions"
echo "2. Add the following secrets:"
echo ""
echo "   HEROKU_API_KEY"
echo "   Value: (run 'heroku auth:token' to get)"
echo ""
echo "   HEROKU_APP_NAME"
echo "   Value: $APP_NAME"
echo ""
echo "   HEROKU_EMAIL"
echo "   Value: (your Heroku account email)"
echo ""

read -p "Press Enter when you've added the GitHub secrets..."

echo ""
echo "====================================="
echo "Step 3: Frontend Setup"
echo "====================================="
echo ""

cd frontend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi

# Create production .env
echo "Creating production environment file..."
echo "REACT_APP_API_BASE_URL=https://$APP_NAME.herokuapp.com" > .env.production

echo -e "${GREEN}✓ Frontend configuration complete${NC}"

cd ..

echo ""
echo "====================================="
echo "Step 4: Database Setup"
echo "====================================="
echo ""

echo "Initializing database schema and seed data..."
heroku run psql \$DATABASE_URL < backend/db/schema.sql -a $APP_NAME
heroku run psql \$DATABASE_URL < backend/db/seed.sql -a $APP_NAME

echo -e "${GREEN}✓ Database initialized${NC}"

echo ""
echo "====================================="
echo "Setup Complete!"
echo "====================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Deploy backend:"
echo "   git push origin main"
echo "   (GitHub Actions will deploy automatically)"
echo ""
echo "2. Or deploy manually:"
echo "   cd backend && git push heroku main"
echo ""
echo "3. Verify backend:"
echo "   curl https://$APP_NAME.herokuapp.com/health"
echo ""
echo "4. Frontend will auto-deploy on next push to main"
echo ""
echo "5. View your site:"
echo "   $PAGES_URL"
echo ""
echo "For troubleshooting, see: DEPLOYMENT.md"
echo ""
