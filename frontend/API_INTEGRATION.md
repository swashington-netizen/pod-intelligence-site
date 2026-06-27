# Frontend API Integration

This document explains how the React frontend integrates with the backend API.

## Overview

The frontend now fetches pod data from the backend API instead of using static configuration files. This enables real-time updates from Slack Canvas and other sources.

## Architecture

```
React App
    ↓
Custom Hooks (usePodData, useAllPods)
    ↓
API Client (api/pods.js)
    ↓
Backend API (Express)
    ↓
PostgreSQL Database
```

## Environment Configuration

Create a `.env` file in the frontend directory:

```bash
cp .env.example .env
```

Edit `.env`:

```bash
# Development
REACT_APP_API_BASE_URL=http://localhost:5000

# Production (Heroku)
# REACT_APP_API_BASE_URL=https://pod-intelligence-api.herokuapp.com

# Production (Cloudflare Workers)
# REACT_APP_API_BASE_URL=https://api.pod-intelligence.workers.dev
```

## File Structure

```
frontend/src/
├── api/
│   ├── config.js           # API base URL and endpoints
│   └── pods.js             # API client functions
├── hooks/
│   ├── usePodData.js       # Fetch single pod with loading/error states
│   └── useAllPods.js       # Fetch all pods with loading/error states
├── components/
│   ├── FeedbackForm.js     # Feedback submission form
│   └── FeedbackForm.css    # Feedback form styles
└── pages/
    ├── HomePage.js         # Updated to use useAllPods hook
    └── PodDetailWithAPI.js # New pod detail page using API
```

## API Client

### Configuration (api/config.js)

Exports:
- `API_BASE_URL` - Base URL from environment
- `API_ENDPOINTS` - Endpoint definitions
- `DEFAULT_FETCH_OPTIONS` - Default fetch headers

### Client Functions (api/pods.js)

**fetchAllPods()**
- Fetches all pods (lightweight data)
- Returns: `Array<{ id, name, groupId, mission, lastSyncedAt, updatedAt }>`
- Used for: Homepage pod grid

**fetchPod(podId)**
- Fetches single pod with full content
- Returns: `{ id, name, groupId, content, canvasId, lastSyncedAt, updatedAt }`
- Used for: Pod detail pages

**submitFeedback({ podId, message, userEmail })**
- Submits user feedback
- Returns: Success response with feedback ID
- Used by: FeedbackForm component

## Custom Hooks

### useAllPods()

Fetches all pods on mount with loading/error handling.

**Returns:**
```javascript
{
  pods: Array,      // Array of pod objects
  loading: boolean, // True while fetching
  error: Error,     // Error object if fetch failed
  refetch: function // Function to manually refetch
}
```

**Usage:**
```javascript
import { useAllPods } from '../hooks/useAllPods';

function HomePage() {
  const { pods, loading, error } = useAllPods();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{pods.map(pod => ...)}</div>;
}
```

### usePodData(podId)

Fetches single pod data on mount and when podId changes.

**Returns:**
```javascript
{
  data: Object,     // Pod object with full content
  loading: boolean, // True while fetching
  error: Error,     // Error object if fetch failed
  refetch: function // Function to manually refetch
}
```

**Usage:**
```javascript
import { usePodData } from '../hooks/usePodData';

function PodDetail() {
  const { podId } = useParams();
  const { data: pod, loading, error } = usePodData(podId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{pod.name}</div>;
}
```

## Components

### FeedbackForm

Form component for submitting user feedback about a pod.

**Props:**
- `podId` (string, required) - Pod identifier

**Features:**
- Message textarea (required)
- Email input (optional)
- Loading state during submission
- Success/error message display
- Auto-clears form on success

**Usage:**
```javascript
import FeedbackForm from '../components/FeedbackForm';

<FeedbackForm podId="smb-revenue-orchestration" />
```

## Updated Pages

### HomePage (pages/HomePage.js)

**Before:**
- Imported static `groups` from `data/podsConfig.js`
- Rendered hardcoded pod data

**After:**
- Uses `useAllPods()` hook to fetch from API
- Shows loading state while fetching
- Shows error message if API call fails
- Groups pods by `groupId` dynamically

**Key Changes:**
```javascript
// Before
import { groups } from '../data/podsConfig';

// After
import { useAllPods } from '../hooks/useAllPods';

const { pods, loading, error } = useAllPods();
```

### PodDetailWithAPI (pages/PodDetailWithAPI.js)

New component that replaces static pod detail page.

**Features:**
- Fetches pod data from API using `usePodData(podId)`
- Displays all pod content sections (mission, initiatives, metrics, next steps, sources)
- Includes `<FeedbackForm>` at bottom of page
- Shows pod metadata (last synced, canvas ID, etc.)
- Loading and error states

**To use:** Update router to use `PodDetailWithAPI` instead of `PodDetail`

## Data Flow

### Homepage Pod Grid

1. Component mounts
2. `useAllPods()` hook triggers `fetchAllPods()`
3. GET request to `/api/pods`
4. Backend queries database: `SELECT id, name, group_id, content->>'mission', last_synced_at FROM pods`
5. Response cached for 60 seconds (Cache-Control header)
6. Hook updates state with pods array
7. Component renders pod cards grouped by portfolio

### Pod Detail Page

1. Component mounts with `podId` param
2. `usePodData(podId)` hook triggers `fetchPod(podId)`
3. GET request to `/api/pods/:podId`
4. Backend queries database: `SELECT * FROM pods WHERE id = $1`
5. Response cached for 60 seconds
6. Hook updates state with complete pod object
7. Component renders all sections + feedback form

### Feedback Submission

1. User fills out form and clicks Submit
2. `submitFeedback()` called with `{ podId, message, userEmail }`
3. POST request to `/api/feedback`
4. Backend logs feedback (TODO: save to database)
5. Success response returned
6. Form cleared, success message shown
7. Success message auto-hides after 5 seconds

## Caching

All GET endpoints return `Cache-Control: public, max-age=60` headers.

**Benefits:**
- Reduces server load
- Faster page loads for repeated visits
- Browser caches responses for 60 seconds

**Trade-offs:**
- Changes take up to 60 seconds to appear
- Acceptable for content that updates via Slack Canvas (not frequently)

## Error Handling

### Network Errors

If the API is unreachable:
- Hooks set `error` state
- Components show error message
- User sees: "Failed to load pods: Failed to fetch"

### 404 Errors

If pod not found:
- `fetchPod()` throws "Pod not found" error
- Component shows: "The pod you're looking for doesn't exist"

### Validation Errors

If feedback submission fails validation:
- Form shows error message
- User can correct and resubmit

## Testing Locally

### 1. Start Backend

```bash
cd backend
npm install
createdb pod_intelligence
psql pod_intelligence < db/schema.sql
psql pod_intelligence < db/seed.sql
npm run dev
```

Backend runs on `http://localhost:5000`

### 2. Start Frontend

```bash
cd frontend
npm install
echo "REACT_APP_API_BASE_URL=http://localhost:5000" > .env
npm start
```

Frontend runs on `http://localhost:3000`

### 3. Test Endpoints

**Health Check:**
```bash
curl http://localhost:5000/health
```

**Fetch All Pods:**
```bash
curl http://localhost:5000/api/pods
```

**Fetch Single Pod:**
```bash
curl http://localhost:5000/api/pods/smb-revenue-orchestration
```

**Submit Feedback:**
```bash
curl -X POST http://localhost:5000/api/feedback \
  -H "Content-Type: application/json" \
  -d '{"podId":"smb-revenue-orchestration","message":"Great pod!","userEmail":"test@salesforce.com"}'
```

## Migration Strategy

### Phase 1: Dual Mode (Current)

- Keep existing static data files
- New API-powered components available
- Can switch between old and new pages

### Phase 2: API Primary

- Update router to use API-powered components
- Keep static files as fallback
- Monitor for issues

### Phase 3: API Only

- Remove static data files
- All data comes from API/database
- Slack Canvas is source of truth

## Production Deployment

### Frontend (GitHub Pages / Cloudflare Pages)

Update `.env` with production API URL:
```bash
REACT_APP_API_BASE_URL=https://pod-intelligence-api.herokuapp.com
```

Build and deploy:
```bash
npm run build
npm run deploy
```

### Backend (Heroku / Cloudflare Workers)

Set CORS origin:
```bash
heroku config:set ALLOWED_ORIGIN=https://swashington-netizen.github.io
```

Frontend requests are allowed from GitHub Pages domain.

## Troubleshooting

### "Failed to fetch pods"

**Check:**
1. Backend is running (`curl http://localhost:5000/health`)
2. Database has data (`psql pod_intelligence -c "SELECT COUNT(*) FROM pods;"`)
3. CORS configured correctly (check `ALLOWED_ORIGIN` env var)
4. Frontend `.env` has correct API URL

### "Pod not found"

**Check:**
1. Pod ID in URL matches database (`SELECT id FROM pods;`)
2. Pod ID uses kebab-case (e.g., `smb-revenue-orchestration`)

### Feedback not submitting

**Check:**
1. Console for errors (F12 → Console)
2. Network tab shows POST to `/api/feedback`
3. Backend logs show "Feedback received"

### Stale data showing

**Cause:** Browser cache (60 second max-age)

**Fix:**
- Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- Wait 60 seconds for cache to expire
- Reduce cache time in backend routes

## Future Enhancements

- [ ] Real-time updates via WebSocket
- [ ] Optimistic UI updates
- [ ] Offline support with Service Worker
- [ ] Search and filtering
- [ ] Pagination for large pod lists
- [ ] Authentication for feedback
- [ ] Admin dashboard for managing pods
