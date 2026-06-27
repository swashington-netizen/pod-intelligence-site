# Portfolio Intelligence - Project Brief

**Last Updated**: June 26, 2026  
**Project**: Portfolio Intelligence Portal  
**Current Portfolio**: Agentic Sales Productivity  
**Status**: Active Development

---

## 1. Project Overview

**Portfolio Intelligence** is an executive-facing internal web application that serves as the authoritative front door for portfolio information at Salesforce.

### Core Identity

- **Name**: Portfolio Intelligence
- **Current Scope**: Agentic Sales Productivity portfolio
- **Future Scope**: Multi-portfolio support across the organization
- **Purpose**: Single trusted destination for strategic portfolio information

### Primary Audiences

1. **Business Stakeholders** - VPs and Directors needing portfolio visibility
2. **Product Leadership** - Strategic decision-makers and investors
3. **Engineering Leadership** - Technical leaders and architects
4. **Product Managers** - Day-to-day portfolio operators

### What This Is (And Isn't)

**This is:**
- A product portal for portfolio intelligence
- The front door to portfolio information
- An executive briefing in web form
- A connector to documentation sources

**This is not:**
- A documentation repository
- A wiki or knowledge base
- A project management tool
- A dashboard of dashboards

---

## 2. Product Vision

Portfolio Intelligence exists to provide **one trusted destination** for portfolio information that empowers executives to understand strategy, track progress, and make informed decisions.

### The Portal Should

✅ **Provide clarity** - Surface strategic priorities in under 30 seconds  
✅ **Build trust** - Source-attributed metrics and transparent data  
✅ **Connect, not replace** - Link to documentation rather than duplicate it  
✅ **Aggregate intelligently** - Eventually pull from Slack, Drive, Linear, and other systems  
✅ **Prioritize readability** - Executive-first language over documentation density

### Strategic Direction

In the future, this portal will:
- Automatically aggregate information from Slack Canvas, Google Drive, and Linear
- Surface real-time updates from connected systems
- Provide a normalized, consistent view across all portfolios
- Enable stakeholders to find information without Slack hunting

### Product Statement

> "This is a product portal, not a wiki."

Content is curated, structured, and optimized for executive consumption. We favor clarity and conciseness over comprehensive documentation.

---

## 3. Product Principles

These principles guide every product and design decision:

### **Executive-First**
Every design choice prioritizes executive readability. If a VP can't scan it in 30 seconds, simplify it.

### **Information Hierarchy**
The most important information is always visible first. Strategic priorities before tactical details. Outcomes before outputs.

### **Scannable in Under 30 Seconds**
First-time visitors should understand "what this is" and "why it matters" within 30 seconds. No scrolling required to grasp the core message.

### **Config-Driven**
All content lives in configuration files. Business stakeholders should be able to update metrics, initiatives, and roadmaps without touching component code.

### **Reusable**
Components and page templates must work across all portfolios and pods. Build once, configure many times.

### **Future-Proof**
Design for the multi-portfolio future today. No hardcoded portfolio names in UI components.

### **Minimal Operational Overhead**
The portal should require minimal maintenance. Automated data ingestion preferred over manual updates.

### **Discoverable Content**
Information should be easy to find. Clear navigation, consistent page structure, and predictable content locations.

### **Consistent Page Templates**
All pods use the same page structure. All portfolios follow the same information architecture. Consistency builds trust and reduces cognitive load.

---

## 4. Design Language

Portfolio Intelligence uses a **Salesforce-inspired design system** that conveys professionalism, trust, and clarity.

### Visual Principles

**Professional** - Enterprise-quality polish appropriate for executive presentations  
**Calm** - Generous whitespace, subtle interactions, minimal animation  
**Scannable** - Strong typography hierarchy, clear visual grouping  
**Trustworthy** - Clean surfaces, consistent spacing, refined details

### Design System Characteristics

✅ **Light mode only** - Single, refined color palette  
✅ **White backgrounds** - Clean, professional base  
✅ **Soft gray surfaces** - Subtle elevation and grouping  
✅ **Blue accents** - Salesforce brand blue (#0070D2)  
✅ **Rounded corners** - 6-12px border radius for modern feel  
✅ **Thin borders** - 1px neutral borders for definition  
✅ **Minimal animation** - Smooth 150-300ms transitions only  
✅ **Strong typography** - Clear hierarchy, generous line-height  
✅ **Large whitespace** - Breathing room between sections

### Design Influences

- **Salesforce** - Brand colors, enterprise professionalism
- **Stripe** - Typography, spacing, polish
- **Linear** - Clean surfaces, subtle interactions

### Avoid These Patterns

❌ Dark mode  
❌ Startup landing pages  
❌ Marketing websites  
❌ Glassmorphism  
❌ Neumorphism  
❌ Heavy gradients  
❌ Oversized shadows  
❌ Flashy animations  
❌ Consumer product aesthetics

### Implementation

All design tokens live in `frontend/src/styles/design-tokens.css`:
- Color palette with semantic naming
- Typography scale (10 stops, 11px-48px)
- Spacing system (4px grid, 13 stops)
- Shadow system (5 elevation levels)
- Border radius scale (4 sizes)
- Transition timing (fast, base, slow)

---

## 5. Portfolio Structure

Portfolio Intelligence currently hosts two portfolios with a specific pod structure. The system must support additional portfolios without UI code changes.

### Portfolio 1: Agentic Sales Productivity

**Mission**: Transform SMB sales productivity through AI orchestration

**Pods**:
1. **SMB Revenue Orchestration (RIS)** - Core AI platform, strategic priority
2. **Slack & Agentforce for Sales** - Workflow integration
3. **Sales Content Management** - Content intelligence
4. **Sales Support SMB Pilot** - Support automation pilot
5. **Sales Support Enhancements** - Support capabilities
6. **Sales Enablement** - Training and adoption

**Strategic Priority**: RIS is the foundation pod with $50M+ year-one revenue impact

### Portfolio 2: Engagement Agent for SDRs & BDRs

**Pods**:
1. **Engagement Agent - Core Delivery** - Primary product development
2. **Engagement Agent - Operate & Improve** - Production operations
3. **Agentic BDR** - BDR-specific capabilities
4. **Qualified for AEs** - AE engagement tools

### Configuration Requirements

- All portfolio and pod data must live in configuration files
- Adding new portfolios or pods must not require component changes
- Pod attributes (name, mission, status, metrics) must be configurable
- Portfolio relationships and hierarchy must be data-driven

---

## 6. Information Architecture

The portal follows a clear three-level hierarchy with consistent navigation patterns.

### Navigation Model

```
Home (Portfolio Overview)
 ├─ Portfolio 1
 │   ├─ Pod 1
 │   ├─ Pod 2
 │   └─ Pod N
 └─ Portfolio 2
     ├─ Pod 1
     └─ Pod N
```

### Standard Pod Page Structure

Every pod page uses the **same reusable template** with these sections:

1. **Overview** - What this pod is and why it exists
2. **Mission** - Strategic purpose and goals
3. **Business Value** - Revenue impact, productivity gains, strategic importance
4. **Initiatives** - Current work with status, owner, timeline
5. **Metrics** - Business outcomes with source attribution
6. **Roadmap** - Strategic milestones with business framing
7. **Architecture** - Technical overview and relationships
8. **Resources** - Links to documentation, Slack, Drive
9. **FAQ** - Common questions answered
10. **Feedback** - Async comment widget

### Consistency Principle

All pods follow this exact structure. Visitors should never wonder "where do I find the roadmap" or "where are the metrics." Predictability builds trust.

### Configuration-Driven

Page structure is enforced by components. Content comes from config files. Template changes propagate to all pods automatically.

---

## 7. Technology Stack

### Current Stack

**Frontend:**
- React 19+
- React Router v6
- CSS3 with custom design system (no framework)
- Configuration-driven content from `src/data/`

**Backend:**
- Node.js with Express
- PostgreSQL (Heroku Postgres)
- Slack Events API integration

**Repository:**
- Git/GitHub
- Monorepo structure (`/frontend`, `/backend`)

**Current Deployment:**
- Frontend: GitHub Pages (planned migration to Cloudflare)
- Backend: Heroku (planned migration to Cloudflare Workers)

### Future Stack (Target State)

**Hosting & Infrastructure:**
- **Cloudflare Pages** - Frontend hosting
- **Cloudflare Workers** - API and webhook handlers
- **Cloudflare Queues** - Event processing pipeline
- **Cloudflare D1** - Structured content storage

**Integrations:**
- **Slack Events API** - Real-time updates from Slack Canvas
- **Google Drive API** - Document metadata and links
- **Linear API** (future) - Initiative and milestone tracking

**Content Flow:**
- Slack Canvas → Event → Queue → Normalizer → D1 → React
- Google Drive → Sync → Normalizer → D1 → React

### Technology Principles

- **Frontend is read-only** - No content editing in the React app
- **Backend normalizes content** - Transform before storage
- **APIs are idempotent** - Safe to replay events
- **Data is source-attributed** - Always track origin

---

## 8. Future Content Architecture

The long-term vision is **automated content aggregation** from multiple sources with a normalized content model.

### Content Publishing Pipeline

```
┌─────────────────┐
│  Slack Canvas   │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  Slack Event    │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   Webhook       │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  Cloudflare     │
│    Queue        │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   Normalizer    │
│    Worker       │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  D1 Database    │
│ (Content Store) │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   React Site    │
│ (Read-Only UI)  │
└─────────────────┘
```

### Content Sources

**Primary Sources:**
1. **Slack Canvas** - Pod updates, metrics, initiatives
2. **Google Drive** - Documentation, roadmaps, business cases
3. **Linear** (future) - Initiatives, milestones, issues

**Publishing Model:**
- Pod teams publish updates to Slack Canvas (single source of truth)
- Canvas changes trigger Slack events
- Workers normalize and store content
- React app displays normalized content

### Key Principles

✅ **Single source of truth** - Teams publish once in their tools  
✅ **Normalized storage** - Consistent schema across sources  
✅ **Read-only frontend** - React never mutates content  
✅ **Idempotent processing** - Safe to replay events  
✅ **Source attribution** - Always track content origin

---

## 9. Data Model

Portfolio Intelligence uses a **hierarchical configuration model** that enables multi-portfolio support without code changes.

### Configuration Hierarchy

```
Portfolio
 ├─ metadata (name, mission, headline)
 ├─ businessMetrics []
 ├─ strategicPod (featured pod reference)
 ├─ supportingPods []
 ├─ roadmap []
 └─ contact
      ↓
     Pod
      ├─ metadata (name, slug, color, status)
      ├─ mission
      ├─ keyInitiatives []
      ├─ impactMetrics []
      ├─ architecture
      ├─ resources []
      └─ faq []
           ↓
          Section
           ├─ heading
           ├─ content []
           └─ subsections []
                ↓
               Content
                ├─ text
                ├─ links
                ├─ metadata
                └─ source
```

### Configuration Files (Current)

**`frontend/src/data/portfolioConfig.js`**
- Portfolio-level configuration
- Business metrics
- Strategic pod designation
- Supporting pods list
- Roadmap milestones
- Contact information

**`frontend/src/data/podsConfig.js`**
- Individual pod configurations
- Pod metadata and status
- Initiatives and metrics
- Architecture and resources

**`frontend/src/data/podDetails.js`**
- Detailed pod page content
- Section-by-section content
- FAQ content
- Resource links

### Configuration Principles

❌ **Never hardcode portfolio content in components**  
✅ **All content lives in config files**  
✅ **Components render data, never contain data**  
✅ **Adding a pod means editing config, not components**  
✅ **Portfolio expansion requires zero component changes**

### Future State (D1 Schema)

```sql
portfolios (id, name, slug, mission, metadata)
pods (id, portfolio_id, name, slug, color, status, metadata)
sections (id, pod_id, type, heading, order, metadata)
content (id, section_id, type, data, source, created_at)
metrics (id, pod_id, label, value, context, source, updated_at)
initiatives (id, pod_id, name, status, owner, timeline, metadata)
```

---

## 10. Development Principles

These principles guide how we write code and implement features.

### Prefer

✅ **Reusable components** - Build once, use everywhere  
✅ **Composition** - Small, focused components that combine  
✅ **Configuration over hardcoding** - Data drives behavior  
✅ **Shared templates** - Same page structure for all pods  
✅ **Small, focused commits** - Incremental, reviewable changes  
✅ **Small, focused prompts** - One feature or fix per session  
✅ **Incremental implementation** - Ship working slices

### Avoid

❌ **Giant refactors** - Change incrementally, not all at once  
❌ **Duplicate components** - Abstract and reuse instead  
❌ **Duplicate page layouts** - Use shared templates  
❌ **Unnecessary dependencies** - Keep bundle small  
❌ **Breaking changes** - Maintain backward compatibility  
❌ **Over-engineering** - Build what's needed now

### Code Quality Standards

**React Components:**
- Functional components with hooks
- Props typed with PropTypes or comments
- Single responsibility per component
- Clear, descriptive naming

**CSS:**
- Design tokens from `design-tokens.css`
- Component-scoped stylesheets
- BEM-like naming for clarity
- Mobile-first responsive design

**Configuration:**
- Well-commented config files
- Clear property naming
- Sensible defaults
- Validation on read

**Git Workflow:**
- Descriptive commit messages
- Feature branches from main
- Small, atomic commits
- No commits of secrets or env files

---

## 11. Current Priorities

Ordered by strategic importance and dependencies.

### 1. Multi-Portfolio Support (Immediate)
Enable the portal to serve multiple portfolios from a single deployment.

**Why**: Second portfolio (Engagement Agent) ready to onboard  
**Scope**: Portfolio switcher, dynamic routing, config expansion  
**Success**: Can add portfolios without component changes

### 2. Executive Dashboard Refinement (Immediate)
Polish the homepage to be "walking deck ready" for stakeholder presentations.

**Why**: Primary entry point for VPs and Directors  
**Scope**: Visual polish, content clarity, source attribution  
**Success**: Execs can scan and understand in 30 seconds

### 3. Replace Placeholder Content (Short-term)
Replace all "Lorem ipsum" and placeholder text with real content.

**Why**: Credibility and usability  
**Scope**: Pod descriptions, metrics, initiatives, FAQs  
**Success**: No placeholders remain, all content is real

### 4. Slack Publishing Pipeline (Medium-term)
Automate content ingestion from Slack Canvas updates.

**Why**: Reduce manual content maintenance overhead  
**Scope**: Webhook handler, normalizer, storage, UI updates  
**Success**: Pod updates automatically flow from Slack to portal

### 5. Google Drive Integration (Medium-term)
Surface links to Drive documents with metadata.

**Why**: Connect to existing documentation sources  
**Scope**: Drive API integration, document metadata, search  
**Success**: Resources section auto-populates from Drive folders

### 6. Search (Long-term)
Enable full-text search across portfolios and pods.

**Why**: Information discoverability at scale  
**Scope**: Search UI, indexing, ranking  
**Success**: Find any content with keyword search

### 7. Deployment (Immediate)
Migrate from GitHub Pages to Cloudflare Pages for production reliability.

**Why**: Better performance, security, and infrastructure  
**Scope**: Cloudflare setup, DNS, CI/CD pipeline  
**Success**: Portal runs on Cloudflare with automatic deploys

---

## 12. Product Decisions

These architectural and product decisions are **locked in** and should not be revisited without strong justification.

### Infrastructure Decisions

✅ **GitHub is the source repository**  
All code lives in GitHub. Not GitLab, not Bitbucket.

✅ **Cloudflare is the target deployment platform**  
Pages for frontend, Workers for backend, D1 for database, Queues for events.

✅ **React is presentation only**  
No content editing in the frontend. Read-only UI consuming APIs.

### Content Architecture Decisions

✅ **Slack Canvas will become a publishing surface**  
Teams publish pod updates to Canvas. Events flow to the portal automatically.

✅ **Google Drive remains the document source of truth**  
We link to Drive documents, we don't replace them.

✅ **Content should be normalized before publishing**  
Backend workers transform content into consistent schema before storage.

✅ **All content must be source-attributed**  
Every metric, initiative, and claim should link back to its source.

### Portfolio Decisions

✅ **RIS is the current strategic priority**  
SMB Revenue Orchestration gets featured placement, investment focus, and team attention.

✅ **Multi-portfolio support is required**  
System must support unlimited portfolios without UI changes.

✅ **Config-driven content model is mandatory**  
Adding portfolios and pods should never require component changes.

### Design Decisions

✅ **Salesforce design language is the standard**  
Brand colors, professional polish, enterprise aesthetics.

✅ **Light mode only**  
No dark mode. Single, refined color palette.

✅ **Executive-first language**  
Business outcomes, not technical features. VP-level writing.

### Development Decisions

✅ **Monorepo structure**  
Frontend and backend in one repository with shared tooling.

✅ **No UI frameworks**  
Custom CSS, no Bootstrap/Tailwind/Material. Full design control.

✅ **Incremental implementation**  
Ship working slices, not big-bang releases.

---

## 13. Working Agreement for Claude Code

This section defines how Claude Code should approach work on Portfolio Intelligence.

### At the Start of Every Session

1. **Read CLAUDE.md** - This document is the authoritative project context
2. **Understand the request** - Ask clarifying questions before implementing
3. **Check current priorities** - Align work with strategic priorities (Section 11)
4. **Review product decisions** - Don't contradict locked-in decisions (Section 12)

### For Large Changes

**Before implementing:**
1. Propose an implementation plan
2. Identify affected components and files
3. Explain architectural tradeoffs
4. Get explicit approval before coding

**When implementing:**
1. Make incremental changes
2. Test each change before moving on
3. Commit frequently with clear messages
4. Preserve existing design language

### For Small Changes

**When implementing:**
1. Make focused changes to relevant files only
2. Don't refactor unrelated code
3. Follow existing patterns and conventions
4. Test the specific feature changed

### Code Modification Guidelines

✅ **Keep prompts focused** - One feature or fix per session  
✅ **Preserve design language** - Maintain visual consistency  
✅ **Follow existing patterns** - Match current code style  
✅ **Update config, not components** - Content lives in config files  
✅ **Test before committing** - Verify changes work locally

❌ **Don't change unrelated code** - Stay focused on the task  
❌ **Don't introduce new dependencies** - Use existing stack  
❌ **Don't remove working features** - Only add or fix  
❌ **Don't hardcode content** - Use configuration files

### When Uncertain

**Ask before:**
- Making architectural changes
- Adding new dependencies
- Changing the design system
- Modifying the data model
- Breaking existing functionality

**Default to:**
- Following existing patterns
- Making minimal changes
- Preserving backward compatibility
- Configuration over code changes

### Communication Style

**Explain:**
- What you're changing and why
- Tradeoffs of your approach
- Alternative approaches considered
- Potential impacts on other features

**Avoid:**
- Overexplaining obvious changes
- Documenting every line of code
- Defensive justifications
- Scope creep beyond the request

### Success Criteria

A successful Claude Code session:
1. Implements the requested feature or fix
2. Maintains design consistency
3. Follows existing patterns
4. Includes focused commits
5. Leaves the codebase better than it found it
6. Requires minimal follow-up fixes

---

## Quick Reference

### Key Files

**Configuration:**
- `frontend/src/data/portfolioConfig.js` - Portfolio-level content
- `frontend/src/data/podsConfig.js` - Pod metadata and status
- `frontend/src/data/podDetails.js` - Detailed pod page content

**Design System:**
- `frontend/src/styles/design-tokens.css` - All design tokens

**Core Components:**
- `frontend/src/components/Layout.js` - Site header/footer
- `frontend/src/components/Card.js` - Reusable card component
- `frontend/src/components/Button.js` - Button variants
- `frontend/src/components/Badge.js` - Status badges
- `frontend/src/components/MetricWithSource.js` - Metrics with attribution

**Pages:**
- `frontend/src/pages/StakeholderDashboard.js` - Homepage
- `frontend/src/pages/PodDetail.js` - Pod detail pages

### Common Tasks

**Add a new portfolio:**
1. Update `portfolioConfig.js` with new portfolio data
2. Add portfolio entry in navigation config
3. Test routing and navigation

**Add a new pod:**
1. Add pod to `podsConfig.js` with metadata
2. Add pod content to `podDetails.js`
3. Add pod to appropriate portfolio in `portfolioConfig.js`

**Update a metric:**
1. Find metric in `portfolioConfig.js` or `podsConfig.js`
2. Update `value`, `context`, and `source` fields
3. Verify rendering on page

**Change design tokens:**
1. Edit `frontend/src/styles/design-tokens.css`
2. Changes propagate automatically to all components

### Running Locally

```bash
# Frontend
cd frontend
npm install
npm start
# Opens on http://localhost:3000

# Backend
cd backend
npm install
cp .env.example .env
npm run dev
# Runs on http://localhost:5000
```

---

## Document History

**Version 1.0** - June 26, 2026  
Initial creation. Captures current state of Portfolio Intelligence after executive dashboard transformation and design system elevation.

**Authors**: Product & Engineering Team  
**Maintained By**: Portfolio Intelligence Team

---

**For Questions or Changes to This Document:**  
This is the authoritative project brief. Changes should be reviewed by the product team before merging.
