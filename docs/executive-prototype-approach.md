# Executive Prototype Approach

**Status**: In Progress  
**Started**: June 29, 2026  
**Last Updated**: June 29, 2026

---

## Vision

Transform Portfolio Intelligence into an **executive-ready proof of concept** that demonstrates:

1. **Product Vision** - How portfolio intelligence will work once fully integrated
2. **Information Flow** - How content will flow from Slack Canvas and Google Drive
3. **Executive Experience** - Professional, scannable, outcome-focused presentation
4. **Representative Reality** - Content that reads like a real internal portal

This is a **demonstration prototype**, not production. The goal is to show stakeholders what the future looks like with minimal build-out.

---

## Core Principles

### 1. Representative, Not Dummy

❌ **Avoid**: "Lorem ipsum", "TBD", "Coming soon", "Placeholder text"  
✅ **Use**: "Demo Data", "Illustrative Content", "Prototype", realistic examples

### 2. Outcome-Focused

Every pod page must answer within 30 seconds:
- What outcome does this deliver?
- Why does it matter to the business?
- Who owns it?
- Where does the information come from?

### 3. Source Attribution

Show where content originates to demonstrate future integrations:
- 💬 Slack Canvas / Slack Channel
- 📄 Google Drive
- 🗺️ Product Roadmap
- ⚙️ Architecture Repo
- ✏️ Manual Entry
- 🔌 Future API

### 4. Configuration-Driven

All representative data lives in configuration files. Swapping demo → real data should require:
- Updating config files
- Zero component changes
- Clear integration points

### 5. Executive-Grade Polish

- Professional aesthetics (Salesforce-inspired, light mode)
- Scannable information hierarchy
- Generous whitespace
- Calm, minimal interactions
- No marketing fluff or startup vibes

---

## Implementation Pattern

### Complete Pod Structure

Every pod includes:

```javascript
{
  // Identity
  displayName: 'Pod Name',
  status: 'In Progress',
  priority: 'P0 | P1 | P2',
  
  // Executive summary (one sentence)
  executiveSummary: '...',
  
  // Business Outcomes (FIRST section on page)
  businessOutcomes: {
    highlight: 'Primary outcome statement',
    outcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3']
  },
  
  // Cross-functional team (with avatars)
  team: [
    { name: 'Full Name', role: 'Business Sponsor' },
    { name: 'Full Name', role: 'Product Manager' },
    // ... 8-12 members total
  ],
  
  // Data sources (shows future integrations)
  dataSources: {
    metrics: { source: 'Salesforce Analytics', lastUpdated: '2 hours ago' },
    roadmap: { source: 'Product Roadmap', lastUpdated: 'June 26' },
    updates: { source: 'Slack Canvas', lastUpdated: 'Today' }
  },
  
  // Recent updates (Slack-style feed)
  recentUpdates: [
    { date, author, type: 'milestone|metric|launch', content, source }
  ],
  
  // Standard sections
  mission: '...',
  keyInitiatives: [...],
  impactMetrics: [...],
  roadmap: [...],
  architecture: {...},
  resources: [...],
  faqs: [...]
}
```

### New Components

**Created:**
- `SourceBadge.js` - Data provenance indicators
- `TeamSection.js` - Team avatars with roles
- `BusinessOutcome.js` - Outcome-focused section

**To Create:**
- `RecentUpdates.js` - Slack-style updates feed
- Enhanced pod detail page layout

---

## Portfolio Structure

### Portfolio 1: Agentic Sales Productivity

1. **SMB Revenue Orchestration (RIS)** - P0 Strategic Priority
2. Slack & Agentforce for Sales
3. Sales Content Management
4. Sales Support SMB Pilot
5. Sales Support Enhancements
6. **Sales Enablement** ✅ *Complete representative data*

### Portfolio 2: Engagement Agent for SDRs & BDRs

7. Engagement Agent - Core Delivery
8. Engagement Agent - Operate & Improve
9. Agentic BDR
10. Qualified for AEs

---

## RIS as Strategic Priority

RIS is P0 but should NOT dominate visually. Use **subtle indicators**:

✅ **Good:**
- P0 priority badge
- "Strategic Priority" label in portfolio view
- Featured in executive dashboard
- Complete, polished content
- Mentioned in portfolio business metrics

❌ **Avoid:**
- Making RIS card 2x larger than others
- Different color scheme
- Overshadowing other pods
- Imbalanced executive experience

Goal: Executive can see RIS is priority without visual imbalance.

---

## Data Provenance Strategy

### UI Patterns

1. **Source Badges** - Small inline indicators
   ```jsx
   <SourceBadge source="Slack Canvas" lastUpdated="Today" />
   ```

2. **Section Headers** - "Last updated from..."
   ```jsx
   <h3>Key Metrics <SourceBadge source="Salesforce Analytics" /></h3>
   ```

3. **Metadata Rows** - Bottom of cards
   ```jsx
   <div className="card-footer">
     <SourceBadge source="Google Drive" lastUpdated="June 25" size="small" />
   </div>
   ```

### Source Types

| Icon | Source | Example Content |
|------|--------|----------------|
| 💬 | Slack Canvas | Updates, team content, status |
| 💬 | Slack Channel | Metrics, discussions |
| 📄 | Google Drive | Documentation, strategy |
| 🗺️ | Product Roadmap | Roadmap, milestones |
| ⚙️ | Architecture Repo | Technical specs |
| ✏️ | Manual Entry | Curated content |
| 🔌 | Future API | Planned integrations |
| 🎭 | Demo Data | Prototype content |

---

## Representative Team Data

### Roles to Include

Every pod needs:
- Business Sponsor (VP or C-level)
- Product Manager
- Single Threaded Owner
- DET Lead
- Engineering Manager
- Senior Software Engineer (1-2)
- Software Engineer (2-3)
- UX Designer
- Architect (Solutions/Technical)
- Data Scientist (where appropriate)

### Naming Guidelines

- Diverse, realistic names
- Professional but approachable
- Mix of genders and backgrounds
- Avoid stereotypical tech names
- No real employee names (privacy)

---

## Migration to Real Data

### Slack Canvas Integration

```javascript
// Current (Demo)
const podData = {
  recentUpdates: salesEnablementData.recentUpdates
};

// Future (Slack API)
const podData = {
  recentUpdates: await fetchSlackCanvasUpdates(pod.slackCanvasId)
};
```

### Google Drive Integration

```javascript
// Current (Demo)
const resources = salesEnablementData.resources;

// Future (Drive API)
const resources = await fetchDriveFolder(pod.driveFolderId);
```

### Team Data

```javascript
// Current (Demo)
const team = salesEnablementData.team;

// Future (Config or HR API)
const team = await getTeamMembers(pod.id); // Or manual config
```

### Metrics

```javascript
// Current (Demo)
const metrics = salesEnablementData.impactMetrics;

// Future (Analytics APIs)
const metrics = await fetchMetrics(pod.id, {
  salesforce: true,
  customDashboards: true,
  lms: true
});
```

---

## Success Criteria

### Executive Readiness Checklist

- [x] Sales Enablement pod is demo-ready
- [ ] All 10 pods have complete representative data
- [ ] Multi-portfolio support implemented
- [ ] Source badges visible throughout
- [ ] Team sections on all pod pages
- [ ] Recent updates feed working
- [ ] No "lorem ipsum" or obviously fake content
- [ ] Can present to VP without disclaimer

### Technical Checklist

- [x] New components created (SourceBadge, TeamSection, BusinessOutcome)
- [x] Complete data structure established (Sales Enablement example)
- [ ] Pod detail page enhanced with new sections
- [ ] Recent updates component created
- [ ] Multi-portfolio navigation
- [ ] Responsive design tested
- [ ] Performance optimized

---

## Current Status

### ✅ Completed (June 29, 2026)

1. **Foundation Components** (3 components, 6 files, ~400 lines)
   - SourceBadge component with styling
   - TeamSection component with styling
   - BusinessOutcome component with styling

2. **Complete Pod Example** (1 pod, ~450 lines)
   - Sales Enablement with full representative data
   - All sections populated
   - 11 team members
   - 4 recent updates
   - 6 impact metrics with sources
   - 3-phase roadmap
   - 6 FAQs
   - Complete architecture and resources

3. **Documentation** (2 docs)
   - Executive Prototype Plan
   - This approach document

### 🚧 In Progress

- None currently

### 📋 Backlog

See **Backlog** section below.

---

## Example: Sales Enablement

Sales Enablement demonstrates the complete pattern:

**Business Outcomes:**
- Reduce ramp time from 90 to 54 days (40%)
- Increase quota attainment by 12%
- Achieve 89% training completion
- Enable just-in-time agentic learning

**Team:** 11 members from Business Sponsor to Content Strategist

**Data Sources:**
- Metrics: Salesforce Analytics (3 hours ago)
- Updates: Slack Canvas (Today)
- Documentation: Google Drive (June 25)

**Recent Updates:** 4 updates simulating Slack feed

**Complete sections:** All sections populated with realistic, executive-ready content

---

## Notes

- This is a **prototype**, not production
- All data is **representative** but realistic
- Easy migration path to **real data**
- Clear **integration points** for Slack and Drive
- **Configuration-driven** - no hardcoded content
- **Executive-grade** quality and polish

---

**Next Steps:** See `docs/executive-prototype-backlog.md`
