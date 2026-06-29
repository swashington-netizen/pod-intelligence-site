# Executive-Ready Prototype Implementation Plan

**Date**: June 29, 2026  
**Status**: Implementation in Progress

---

## Objective

Transform Portfolio Intelligence into an executive-ready proof of concept that demonstrates:
1. Product vision and information organization
2. Future content flow from Slack Canvas and Google Drive
3. Executive-grade user experience
4. Representative data that reads like a real internal portal

---

## Implementation Strategy

### Phase 1: New Components ✅
- [x] `SourceBadge.js` - Data provenance indicators
- [x] `TeamSection.js` - Cross-functional team display
- [x] `BusinessOutcome.js` - Outcome-focused section
- [ ] `RecentUpdates.js` - Slack-style updates feed

### Phase 2: Enhanced Data Structures
- [ ] Complete `comprehensivePodData.js` with all 10 pods
- [ ] Add Portfolio 2 (Engagement Agent) configuration
- [ ] Add team data for all pods
- [ ] Add source attribution metadata

### Phase 3: Page Enhancements
- [ ] Update `PodDetail.js` to include:
  - Business Outcomes section (prominent, first)
  - Team Section with avatars
  - Source badges throughout
  - Recent Updates feed
- [ ] Update `StakeholderDashboard.js` for multi-portfolio
- [ ] Enhance `HomePage.js` with portfolio selector

### Phase 4: Visual Polish
- [ ] Executive information hierarchy
- [ ] Strategic priority indicators (subtle, not dramatic)
- [ ] Scannable layouts
- [ ] Professional, calm aesthetics

---

## Representative Data Requirements

### Every Pod Must Include:

1. **Business Outcomes** (answers "Why does this matter?")
   - Highlight outcome statement
   - 3-4 specific measurable outcomes
   - Business value, not features

2. **Cross-Functional Team**
   - Business Sponsor
   - Product Manager
   - Single Threaded Owner
   - DET Lead
   - Engineering Manager
   - Engineers (2-4)
   - UX Designer
   - Architect
   - Data Scientist (where appropriate)

3. **Data Sources** (demonstrates future integrations)
   - Metrics → Salesforce Analytics / Custom dashboards
   - Roadmap → Product Roadmap / Manual Entry
   - Updates → Slack Canvas / Slack Channel
   - Documentation → Google Drive / Architecture Repo

4. **Recent Updates** (Slack-style feed)
   - 2-4 recent updates
   - Author, timestamp, type (milestone/metric/launch)
   - Source attribution

5. **Complete Sections**
   - Executive Summary
   - Mission
   - Key Initiatives (with rich context)
   - Impact Metrics (with sources)
   - Roadmap (3 phases)
   - Architecture
   - Resources
   - FAQs

---

## Portfolio Structure

### Portfolio 1: Agentic Sales Productivity
- SMB Revenue Orchestration (RIS) - **P0 Strategic Priority**
- Slack & Agentforce for Sales
- Sales Content Management
- Sales Support SMB Pilot
- Sales Support Enhancements
- Sales Enablement

### Portfolio 2: Engagement Agent for SDRs & BDRs
- Engagement Agent - Core Delivery
- Engagement Agent - Operate & Improve
- Agentic BDR
- Qualified for AEs

---

## RIS Strategic Priority Treatment

RIS is the current strategic priority but should NOT be dramatically larger.

**Subtle indicators:**
- P0 priority badge
- "Strategic Priority" label in portfolio overview
- Featured in executive dashboard
- Complete, polished content

**Avoid:**
- Making RIS card 2x larger
- Different color scheme
- Overshadowing other pods
- Imbalanced executive experience

---

## Data Provenance Patterns

### Source Badges
Show where information comes from:
- 💬 Slack Canvas - Updates and team content
- 💬 Slack Channel - Real-time metrics and discussions
- 📄 Google Drive - Documentation and strategy docs
- 🗺️ Product Roadmap - Roadmap and milestones
- ⚙️ Architecture Repo - Technical specs
- ✏️ Manual Entry - Manually curated content
- 🔌 Future API - Planned integration points
- 🎭 Demo Data - Prototype/illustrative content

### UI Patterns
1. **Inline badges**: Small source indicator next to metrics
2. **Section headers**: "Last updated from Slack Canvas"
3. **Metadata rows**: Source + timestamp at bottom of cards
4. **Hover tooltips**: Additional source context

---

## Representative Team Names

Diverse, realistic names for all team members across 10 pods:
- Business Sponsors: C-level or VP-level names
- Product/Engineering: Realistic tech industry names
- Mix of genders and backgrounds
- Professional but approachable

---

## Success Criteria

### Executive Readiness Checklist
- [ ] Can present any pod page to VP without disclaimer
- [ ] Content reads like real internal portal
- [ ] Clear answer to "What outcome does this deliver?"
- [ ] Obvious where content comes from (future integrations)
- [ ] Team section shows real people can replace placeholders
- [ ] Professional, calm visual design
- [ ] No "lorem ipsum" or obviously fake data

### Technical Checklist
- [ ] Configuration-driven (easy to swap demo → real data)
- [ ] Reusable components across all pods
- [ ] No hardcoded content in React components
- [ ] Clear integration points for Slack and Drive

---

## Migration Path to Real Data

### Slack Canvas Integration
```javascript
// Current (Demo)
recentUpdates: [
  { date: '2026-06-29', author: 'Alex Chen', content: '...' }
]

// Future (Slack API)
recentUpdates: await fetchSlackCanvasUpdates(pod.slackCanvasId)
```

### Google Drive Integration
```javascript
// Current (Demo)
resources: [
  { title: 'Strategy Doc', type: 'Google Drive', updated: 'June 20' }
]

// Future (Drive API)
resources: await fetchDriveDocuments(pod.driveFolderId)
```

### Team Data
```javascript
// Current (Demo)
team: [
  { name: 'Alex Chen', role: 'Product Manager' }
]

// Future (Manual Config or HR API)
team: podConfig.team // Maintained in config or synced from HR system
```

---

## Notes

- All metrics are representative but realistic
- Team names are fictional but professional
- Timeline dates are believable (Q3-Q4 2026)
- Source attributions demonstrate future architecture
- Content quality is "executive demo ready"
