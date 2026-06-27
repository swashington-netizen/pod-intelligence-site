# Engineering Decisions Log

**Portfolio Intelligence Major Technical Decisions**

Last Updated: June 26, 2026

---

## Overview

This document records significant engineering decisions made during the development of Portfolio Intelligence. Each decision includes context, rationale, alternatives considered, and tradeoffs.

---

## Decision 1: React for Frontend

**Status**: ✅ Adopted  
**Date**: June 2026  
**Decision Maker**: Engineering Team

### Context

Need a modern frontend framework to build an interactive, component-based executive dashboard.

### Decision

Use React 19+ with React Router for the frontend application.

### Rationale

**Pros**:
- ✅ Component-based architecture aligns with reusable design requirements
- ✅ Large ecosystem and community support
- ✅ Team familiarity with React
- ✅ Excellent developer experience
- ✅ Virtual DOM for efficient updates
- ✅ React Router provides declarative routing
- ✅ Hooks enable clean state management without Redux

**Cons**:
- ❌ Larger bundle size than vanilla JS
- ❌ Requires build step (Create React App)
- ❌ JSX syntax has learning curve for new developers

### Alternatives Considered

**Vue.js**:
- Simpler API, easier learning curve
- Rejected: Less team familiarity, smaller ecosystem

**Svelte**:
- No virtual DOM, smaller bundle size
- Rejected: Smaller ecosystem, less mature tooling

**Vanilla JavaScript**:
- Lightest weight, no dependencies
- Rejected: Component reuse would require custom framework

### Consequences

- Must maintain React version updates
- Build pipeline required (longer local dev setup)
- Bundle size managed through code splitting (future)

### Related

- ADR 0002: Configuration-Driven Architecture
- [Architecture Docs](architecture.md#frontend-architecture)

---

## Decision 2: Cloudflare Platform

**Status**: 🚧 Planned (Target State)  
**Current**: GitHub Pages + Heroku  
**Date**: June 2026

### Context

Need scalable, cost-effective hosting for frontend and backend with global edge performance.

### Decision

Migrate to Cloudflare Pages (frontend), Workers (backend), D1 (database), and Queues (events).

### Rationale

**Pros**:
- ✅ **Global edge network** - Low latency worldwide
- ✅ **Serverless** - No server management, automatic scaling
- ✅ **Cost-effective** - Pay-per-use, no idle costs
- ✅ **Integrated platform** - Pages, Workers, D1, Queues work together
- ✅ **DX** - Wrangler CLI, local development, easy deployment
- ✅ **Performance** - Workers have <5ms cold starts
- ✅ **Free tier** - Generous limits for internal tools

**Cons**:
- ❌ **Learning curve** - New platform for team
- ❌ **D1 limits** - SQLite has different constraints than Postgres
- ❌ **Vendor lock-in** - Cloudflare-specific APIs
- ❌ **Migration effort** - Code changes required from Heroku

### Alternatives Considered

**AWS (Lambda + API Gateway + RDS)**:
- Most mature, feature-rich
- Rejected: More complex, higher cost, slower cold starts

**Vercel + Supabase**:
- Great DX, integrated backend
- Rejected: Higher cost at scale, less control

**Stay on Heroku + GitHub Pages**:
- No migration needed
- Rejected: More expensive, less performant, Heroku's uncertain future

### Migration Strategy

1. **Phase 1**: Keep current infrastructure (Heroku + GitHub Pages)
2. **Phase 2**: Deploy Cloudflare Workers API alongside Heroku (dual-run)
3. **Phase 3**: Migrate database to D1 with data sync
4. **Phase 4**: Cut over frontend to Cloudflare Pages
5. **Phase 5**: Deprecate Heroku

### Cost Comparison

| Platform | Monthly Cost (Estimated) |
|----------|-------------------------|
| **Current** (Heroku + GitHub Pages) | $7-12 |
| **Cloudflare** (Pages + Workers + D1) | $0-5 |

### Related

- ADR 0001: Hosting Decision
- [Deployment Guide](deployment.md)

---

## Decision 3: Configuration-Driven Architecture

**Status**: ✅ Adopted  
**Date**: June 2026

### Context

Need a way for non-developers to update portfolio content without touching React code.

### Decision

Separate content from components using configuration files.

### Rationale

**Pros**:
- ✅ **Non-developer friendly** - Business users can edit config files
- ✅ **Scalable** - Adding portfolios/pods doesn't require code changes
- ✅ **Maintainable** - Content changes don't affect components
- ✅ **Testable** - Components are pure renderers
- ✅ **Reusable** - Same components for all portfolios

**Cons**:
- ❌ **Duplication** - Config files can get large
- ❌ **Type safety** - JavaScript objects aren't type-checked
- ❌ **Git commits** - Content updates require deployment

### Implementation

**Configuration Files**:
- `frontend/src/data/portfolioConfig.js` - Portfolio definitions
- `frontend/src/data/podsConfig.js` - Pod metadata
- `frontend/src/data/podDetails.js` - Detailed content

**Component Pattern**:
```javascript
// ❌ Bad: Hardcoded
function PodCard() {
  return <div>SMB Revenue Orchestration</div>;
}

// ✅ Good: Configuration-driven
function PodCard({ pod }) {
  return <div>{pod.name}</div>;
}
```

### Alternatives Considered

**Hardcoded in Components**:
- Simplest approach
- Rejected: Requires developer for every content change

**CMS (Contentful, Strapi)**:
- Rich editing experience
- Rejected: Overkill for current needs, adds complexity

**Database + Admin UI**:
- Full CMS capabilities
- Accepted for future: Migration path once Slack integration complete

### Future Evolution

Current: Static config files  
→ Near-term: Database-backed with API  
→ Long-term: Slack Canvas as content source

### Related

- ADR 0002: Content Model
- [Architecture Docs](architecture.md#configuration-driven-design)

---

## Decision 4: Reusable Component Templates

**Status**: ✅ Adopted  
**Date**: June 2026

### Context

Need consistent pod pages across all portfolios without duplicating code.

### Decision

Build reusable page templates that work for all pods.

### Rationale

**Pros**:
- ✅ **Consistency** - All pod pages look the same
- ✅ **Maintainability** - Fix bugs once, apply everywhere
- ✅ **Scalability** - New pods automatically get template
- ✅ **Predictability** - Users know where to find information

**Cons**:
- ❌ **Flexibility** - Hard to customize individual pod pages
- ❌ **Over-engineering** - More complex than hardcoded pages

### Implementation

**Template Pattern**:
```javascript
function PodDetail({ pod }) {
  return (
    <>
      <Hero name={pod.name} mission={pod.mission} />
      <Initiatives initiatives={pod.initiatives} />
      <Metrics metrics={pod.metrics} />
      <NextSteps steps={pod.nextSteps} />
      <Resources resources={pod.resources} />
      <FeedbackForm podId={pod.id} />
    </>
  );
}
```

All pods use this template, populated with different data.

### Alternatives Considered

**Custom Page Per Pod**:
- Maximum flexibility
- Rejected: Doesn't scale, inconsistent UX

**Sections as Components**:
- Adopted: Best balance of reusability and flexibility

### Consequences

- Pod pages are predictable (good for users)
- Cannot easily create unique layouts for special pods (acceptable tradeoff)
- Future: Allow optional section ordering via config

### Related

- [Architecture Docs](architecture.md#component-hierarchy)

---

## Decision 5: Slack-First Publishing

**Status**: 🚧 Planned  
**Date**: June 2026

### Context

Pod teams already use Slack for communication. Need a low-friction way to publish updates.

### Decision

Use Slack Canvas as the primary content authoring surface.

### Rationale

**Pros**:
- ✅ **Zero training** - Teams already use Slack
- ✅ **Real-time collaboration** - Multiple editors
- ✅ **Low friction** - Edit in Slack, publish automatically
- ✅ **Single source** - Slack Canvas is source of truth
- ✅ **Audit trail** - Slack tracks edit history

**Cons**:
- ❌ **Limited formatting** - Canvas is simpler than Markdown editors
- ❌ **Slack dependency** - Requires Slack Events API
- ❌ **Migration effort** - Need to set up Canvases for each pod

### Alternatives Considered

**Google Docs**:
- Richer editing experience
- Rejected: Google Drive API more complex, less integration with Slack

**Notion**:
- Excellent editing, databases
- Rejected: Adoption barrier, not used by teams

**Admin UI in Portal**:
- Custom editing experience
- Rejected: High development effort, yet another tool

**Git-based (Markdown files)**:
- Version control built-in
- Rejected: Too technical for non-developers

### Publishing Workflow

```
Team edits Canvas
    ↓
Slack Events API fires
    ↓
Webhook receives event
    ↓
Queue buffers event
    ↓
Worker normalizes content
    ↓
Database updated
    ↓
Frontend displays changes (within 60s)
```

### Related

- ADR 0003: Slack Pipeline
- [Content Pipeline](content-pipeline.md)

---

## Decision 6: Google Drive as Document Source

**Status**: 🚧 Planned (Future)  
**Date**: June 2026

### Context

Teams store documents (business cases, roadmaps, architecture docs) in Google Drive. Want to link them in portal without duplicating content.

### Decision

Link to Google Drive documents, don't replicate content.

### Rationale

**Pros**:
- ✅ **Single source of truth** - Drive is canonical
- ✅ **Always up-to-date** - Links never stale
- ✅ **Permissions respected** - Drive access control applies
- ✅ **Rich documents** - Google Docs, Sheets, Slides supported

**Cons**:
- ❌ **Requires Drive access** - Users need Google account
- ❌ **Broken links** - Files can be moved/deleted
- ❌ **No search** - Can't search document content in portal

### Implementation

**Resources Table**:
```sql
CREATE TABLE resources (
  id TEXT PRIMARY KEY,
  pod_id TEXT,
  type TEXT,  -- 'drive' | 'slack' | 'linear'
  title TEXT,
  url TEXT,
  last_modified TIMESTAMPTZ
);
```

**Drive Webhook**:
- Watch specific Drive folders (one per pod)
- Receive notifications on file changes
- Fetch metadata, update resources table
- Display in pod "Resources" section

### Alternatives Considered

**Import Drive Content**:
- Could extract text, store in database
- Rejected: Complex sync, stale content, large storage

**Manual Links**:
- Pod owners paste Drive links in config
- Rejected: Manual process, links go stale

### Related

- [Content Pipeline](content-pipeline.md#google-drive-integration-future)

---

## Decision 7: Executive-First UX

**Status**: ✅ Adopted  
**Date**: June 2026

### Context

Primary users are executives and product leaders, not engineers.

### Decision

Optimize UX for executive consumption: scannable, high-level, business-focused.

### Rationale

**Principles**:
- ✅ **30-second scan** - Understand portfolio in 30 seconds
- ✅ **Business language** - Outcomes over outputs
- ✅ **Information hierarchy** - Most important info first
- ✅ **Minimal jargon** - Explain technical terms
- ✅ **Source attribution** - Link metrics to sources

**Design Decisions**:
- Large, clear typography (48px headings)
- Business metrics front and center ($127M impact, not "4 active pods")
- Strategic priorities before pod details
- "So what?" context for every metric

### Alternatives Considered

**Engineering-First UX**:
- Technical details, architecture diagrams
- Rejected: Wrong audience

**Wiki-Style**:
- Comprehensive documentation
- Rejected: Too dense, low signal-to-noise

### Implementation

**Homepage**:
```
1. Portfolio Name + Mission (5 seconds to understand)
2. Business Impact Metrics (5 seconds to grasp value)
3. Strategic Priorities (10 seconds to see focus)
4. Pod Overview (10+ seconds for details)
```

**Metric Format**:
```
$127M                    ← Value (large, bold)
Projected Revenue Impact ← Label (clear)
Annual incremental...    ← Context ("so what?")
Source: FY26 Model       ← Attribution (trust)
```

### Related

- [CLAUDE.md - Product Principles](../CLAUDE.md#product-principles)

---

## Decision 8: Multi-Portfolio Support

**Status**: ✅ Adopted  
**Date**: June 2026

### Context

Initially built for Agentic Sales Productivity portfolio. Need to support additional portfolios without code changes.

### Decision

Design for multi-portfolio from day one, even if only one portfolio exists initially.

### Rationale

**Pros**:
- ✅ **Future-proof** - Ready for additional portfolios
- ✅ **Scalable** - No architectural changes needed later
- ✅ **Clean design** - Forces separation of concerns

**Cons**:
- ❌ **Over-engineering** - More complex than single-portfolio solution
- ❌ **Unused features** - Multi-portfolio UI not needed yet

### Implementation

**Data Model**:
```javascript
{
  portfolios: [
    {
      id: 'agentic-sales-productivity',
      name: 'Agentic Sales Productivity',
      pods: [...]
    },
    {
      id: 'engagement-agent',
      name: 'Engagement Agent for SDRs & BDRs',
      pods: [...]
    }
  ]
}
```

**Component Design**:
```javascript
// ❌ Bad: Hardcoded
<h1>Agentic Sales Productivity</h1>

// ✅ Good: Dynamic
<h1>{portfolio.name}</h1>
```

### Consequences

- Adding a portfolio requires editing config, not code
- Components work for any portfolio
- Future: Portfolio switcher UI when more portfolios exist

### Related

- [Architecture Docs](architecture.md#multi-portfolio-architecture)

---

## Decision 9: PostgreSQL → Cloudflare D1

**Status**: 🚧 Planned Migration  
**Current**: PostgreSQL on Heroku  
**Target**: D1 (SQLite) on Cloudflare  
**Date**: June 2026

### Context

Current database is Heroku Postgres. Planning migration to Cloudflare D1 for edge performance.

### Decision

Migrate from PostgreSQL to Cloudflare D1 (SQLite-based).

### Rationale

**Pros**:
- ✅ **Edge performance** - Database at the edge, low latency
- ✅ **Cost** - Included in Cloudflare Workers plan
- ✅ **Simplicity** - SQLite is simpler than Postgres
- ✅ **Integration** - Native Cloudflare Workers integration

**Cons**:
- ❌ **SQLite limitations** - No full-text search, simpler query planner
- ❌ **Size limits** - 10GB per database (sufficient for now)
- ❌ **Feature parity** - Some Postgres features missing (arrays, JSON functions)
- ❌ **Migration effort** - SQL syntax differences

### Migration Strategy

1. **Schema translation**: Convert Postgres schema to SQLite
2. **Data export**: Export pods table to JSON
3. **Data import**: Import into D1
4. **Dual-write**: Write to both databases during transition
5. **Cutover**: Switch reads to D1
6. **Decommission**: Remove Postgres

### Tradeoffs

**Acceptable**:
- No full-text search (build with Algolia later if needed)
- Simpler JSON querying (can work around)

**Blocker**:
- None identified (schema is simple)

### Related

- ADR 0001: Hosting
- [Deployment Guide](deployment.md)

---

## Decision 10: Custom CSS (No UI Framework)

**Status**: ✅ Adopted  
**Date**: June 2026

### Context

Need design system for consistent UI. Considering CSS framework vs. custom CSS.

### Decision

Use custom CSS with design tokens, no UI framework (Bootstrap, Tailwind, Material UI).

### Rationale

**Pros**:
- ✅ **Full control** - Exact Salesforce-inspired design
- ✅ **Lightweight** - No framework overhead
- ✅ **Performance** - Smaller CSS bundle
- ✅ **Learning** - Team builds CSS skills
- ✅ **Flexibility** - Not constrained by framework patterns

**Cons**:
- ❌ **More work** - Build components from scratch
- ❌ **Consistency** - Must enforce design system manually
- ❌ **Browser compat** - Handle cross-browser issues ourselves

### Implementation

**Design Tokens** (`styles/design-tokens.css`):
```css
:root {
  --color-primary: #0070D2;
  --font-size-6: 32px;
  --space-4: 16px;
  --shadow-md: 0 2px 8px rgba(0,0,0,0.1);
}
```

**Component CSS**:
```css
.card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
}
```

### Alternatives Considered

**Tailwind CSS**:
- Utility-first, fast development
- Rejected: Clutters JSX, not Salesforce-aligned

**Material UI**:
- Complete component library
- Rejected: Google design language, not Salesforce

**Bootstrap**:
- Battle-tested, comprehensive
- Rejected: Generic look, hard to customize

### Consequences

- Design system must be documented and enforced
- More CSS to write initially
- Full control over visual design (worth it)

### Related

- [Design System README](../frontend/src/styles/)

---

## Summary of Key Decisions

| Decision | Status | Impact | Priority |
|----------|--------|--------|----------|
| React Frontend | ✅ Adopted | High | Critical |
| Cloudflare Platform | 🚧 Planned | High | High |
| Configuration-Driven | ✅ Adopted | High | Critical |
| Reusable Templates | ✅ Adopted | Medium | Medium |
| Slack Publishing | 🚧 Planned | High | High |
| Google Drive Links | 🚧 Future | Low | Low |
| Executive-First UX | ✅ Adopted | High | Critical |
| Multi-Portfolio | ✅ Adopted | Medium | Medium |
| PostgreSQL → D1 | 🚧 Planned | Medium | Medium |
| Custom CSS | ✅ Adopted | Low | Low |

---

## Decision-Making Process

### Criteria for Major Decisions

1. **User Impact** - How does this affect executives and stakeholders?
2. **Developer Experience** - Maintainability, tooling, learning curve
3. **Scalability** - Can this handle 10x more portfolios/pods?
4. **Cost** - Infrastructure and operational costs
5. **Time to Value** - How quickly can we ship?
6. **Reversibility** - How hard is it to change this decision later?

### When to Document

Document a decision if:
- It affects the system architecture
- It constrains future development
- It's non-obvious or contentious
- Future developers will ask "why did we do it this way?"

### Document Format

Use ADRs (Architecture Decision Records) for major decisions.

See `/docs/adr/` directory.

---

## Related Documentation

- [Architecture](architecture.md)
- [Content Pipeline](content-pipeline.md)
- [Roadmap](roadmap.md)
- [ADR Directory](adr/)
