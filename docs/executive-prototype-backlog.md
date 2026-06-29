# Executive Prototype Backlog

**Status**: Prioritized backlog for executive-ready prototype  
**Last Updated**: June 29, 2026

---

## Overview

This backlog tracks remaining work to complete the executive-ready proof of concept for Portfolio Intelligence. Work is organized by priority and estimated effort.

---

## Priority 1: Complete Core Pods (Est: 6-8 hours)

### P1.1: Complete Remaining Portfolio 1 Pods
**Effort**: 4-5 hours  
**Status**: Not Started

Create complete representative data for 5 remaining pods in Portfolio 1:

1. **SMB Revenue Orchestration (RIS)** - P0 Strategic Priority
   - Already has partial data in `comprehensivePodData.js`
   - Needs: Team (11 members), Recent updates (4), Complete metrics
   - Est: 1 hour

2. **Slack & Agentforce for Sales**
   - Already has partial data in `comprehensivePodData.js`
   - Needs: Team (7 members), Recent updates (3), Complete roadmap
   - Est: 45 min

3. **Sales Content Management**
   - Has basic data in `podsConfig.js`
   - Needs: Full structure like Sales Enablement
   - Est: 1 hour

4. **Sales Support SMB Pilot**
   - Has basic data in `podsConfig.js`
   - Needs: Full structure like Sales Enablement
   - Est: 1 hour

5. **Sales Support Enhancements**
   - Has basic data in `podsConfig.js`
   - Needs: Full structure like Sales Enablement
   - Est: 1 hour

**Deliverable**: 6 complete pods in Portfolio 1 with executive-ready content

---

### P1.2: Create Portfolio 2 Configuration & Pods
**Effort**: 2-3 hours  
**Status**: Not Started

Add complete configuration for Portfolio 2: Engagement Agent for SDRs & BDRs

**Configuration** (30 min):
- Add to `portfolioConfig.js`
- Portfolio overview
- Business metrics (4-6 metrics)
- Executive summary
- Strategic rationale

**Pods** (4 pods × 30 min each):
1. **Engagement Agent - Core Delivery**
   - Has basic data, needs full structure
2. **Engagement Agent - Operate & Improve**
   - Has basic data, needs full structure
3. **Agentic BDR**
   - Has basic data, needs full structure
4. **Qualified for AEs**
   - Has basic data, needs full structure

**Deliverable**: Complete Portfolio 2 with 4 pods, ready for executive demo

---

## Priority 2: Page Enhancements (Est: 4-5 hours)

### P2.1: Create RecentUpdates Component
**Effort**: 45 min  
**Status**: Not Started

Build component to display Slack-style updates feed:

**Files**:
- `frontend/src/components/RecentUpdates.js`
- `frontend/src/components/RecentUpdates.css`

**Features**:
- Timeline view with dates
- Author, timestamp, type icon
- Source badge (Slack Canvas, Slack Channel, etc.)
- Expandable/collapsible
- Mobile responsive

**Design**: Clean, professional feed similar to Slack but calmer

---

### P2.2: Enhance PodDetail Page
**Effort**: 2 hours  
**Status**: Not Started

Update `frontend/src/pages/PodDetail.js` to include new sections:

**New Sections** (in order):
1. **Business Outcomes** - First section (using `BusinessOutcome` component)
2. **Recent Updates** - Second section (using `RecentUpdates` component)
3. Mission (existing)
4. Key Initiatives (existing, enhanced with progress bars)
5. **Team** - Cross-functional team (using `TeamSection` component)
6. Impact Metrics (existing, add source badges)
7. Roadmap (existing)
8. Architecture (existing)
9. Resources (existing, add source badges)
10. FAQs (existing)
11. Feedback (existing)

**Enhancements**:
- Add source badges throughout
- Improve information hierarchy
- Better spacing and visual flow
- Mobile responsive

---

### P2.3: Multi-Portfolio Support
**Effort**: 1.5 hours  
**Status**: Not Started

Enable portfolio switching:

**Update HomePage** (`frontend/src/pages/HomePage.js`):
- Portfolio selector dropdown or tabs
- Show pods for selected portfolio
- Default to Portfolio 1

**Update StakeholderDashboard** (`frontend/src/pages/StakeholderDashboard.js`):
- Accept portfolio parameter
- Display correct portfolio data
- Portfolio switcher in header

**Update Navigation** (`frontend/src/components/Navigation.js`):
- Portfolio links in menu
- Active portfolio indicator

**Routing**:
- `/` - Home (defaults to Portfolio 1)
- `/portfolio/agentic-sales-productivity`
- `/portfolio/engagement-agent`
- `/pods/:podId` (existing)

---

## Priority 3: Visual Polish (Est: 2-3 hours)

### P3.1: Executive Information Hierarchy
**Effort**: 1 hour  
**Status**: Not Started

Refine visual hierarchy for executive scannability:

**Updates**:
- Section headers more prominent
- Outcome statements larger
- Metrics more visual
- Better use of whitespace
- Subtle shadows and borders
- Professional color palette

**Files to Update**:
- `frontend/src/pages/PodDetail.css`
- `frontend/src/pages/StakeholderDashboard.css`
- `frontend/src/styles/design-tokens.css` (if needed)

---

### P3.2: Strategic Priority Indicators
**Effort**: 45 min  
**Status**: Not Started

Add subtle indicators for P0 pods (like RIS):

**Indicators** (subtle, not dramatic):
- Small "P0" or "★ Strategic Priority" badge in pod card
- Slightly bolder border on pod card (not different color)
- Featured placement in portfolio overview
- Mentioned in portfolio business metrics

**Avoid**:
- Making RIS 2x larger
- Different color scheme
- Overshadowing other pods
- Imbalanced layout

---

### P3.3: Mobile Responsive Polish
**Effort**: 45 min  
**Status**: Not Started

Ensure all new components work beautifully on mobile:

**Test**:
- Team avatars (grid adjusts)
- Recent updates (stacked timeline)
- Business outcomes (mobile-friendly list)
- Source badges (appropriate sizing)
- Metrics cards (2 column → 1 column)

**Update**:
- Media queries in all new component CSS
- Test on iPhone and Android sizes

---

## Priority 4: Integration & Testing (Est: 1-2 hours)

### P4.1: Data Integration
**Effort**: 30 min  
**Status**: Not Started

Connect comprehensive pod data to application:

**Tasks**:
- Update `PodDetail.js` to pull from comprehensive data
- Fallback to existing data if comprehensive not available
- Ensure all 10 pods render correctly
- Test portfolio switching

---

### P4.2: Cross-Browser Testing
**Effort**: 30 min  
**Status**: Not Started

Test in multiple browsers:
- Chrome (primary)
- Safari
- Firefox
- Edge

Fix any rendering issues.

---

### P4.3: Performance Optimization
**Effort**: 30 min  
**Status**: Not Started

Ensure smooth performance:
- Lazy load images in team avatars
- Optimize component re-renders
- Check bundle size
- Lighthouse audit

---

## Priority 5: Documentation Updates (Est: 30 min)

### P5.1: Update README
**Effort**: 15 min  
**Status**: Not Started

Add section about executive prototype:
- Representative data approach
- How to swap demo → real data
- Integration points for Slack and Drive

---

### P5.2: Update CLAUDE.md
**Effort**: 15 min  
**Status**: Not Started

Add notes about:
- Executive prototype status
- Representative data locations
- Migration path to production

---

## Estimated Total Effort

| Priority | Effort | Description |
|----------|--------|-------------|
| P1 | 6-8 hours | Complete all 10 pods with representative data |
| P2 | 4-5 hours | Page enhancements and new components |
| P3 | 2-3 hours | Visual polish and responsive design |
| P4 | 1-2 hours | Integration and testing |
| P5 | 30 min | Documentation updates |
| **Total** | **14-18.5 hours** | **Complete executive-ready prototype** |

---

## Completion Checklist

### Phase 1: Data Complete
- [ ] All 10 pods have complete representative data
- [ ] Both portfolios fully configured
- [ ] 100+ team members across all pods
- [ ] 30+ recent updates across all pods
- [ ] All metrics have source attribution

### Phase 2: Pages Enhanced
- [ ] RecentUpdates component created
- [ ] PodDetail page shows all new sections
- [ ] Multi-portfolio navigation works
- [ ] Source badges visible throughout
- [ ] Team sections on all pods

### Phase 3: Polish Complete
- [ ] Executive information hierarchy refined
- [ ] Strategic priority indicators subtle and effective
- [ ] Mobile responsive on all pages
- [ ] Cross-browser tested
- [ ] Performance optimized

### Phase 4: Demo Ready
- [ ] Can present any pod to VP without disclaimer
- [ ] Content reads like real portal
- [ ] Clear integration story (Slack, Drive)
- [ ] Easy migration path documented
- [ ] Documentation updated

---

## Quick Wins (Can do in 1-2 hours)

If time is limited, these deliver maximum impact:

1. **Complete RIS pod data** (1 hour)
   - Most important pod, strategic priority
   - Demonstrates full pattern
   
2. **Create RecentUpdates component** (45 min)
   - Shows Slack integration vision clearly
   - High visual impact

3. **Add Business Outcomes to 3 pods** (45 min)
   - Most important section for executives
   - Quick to add to existing pods

---

## Notes

- Work can be done incrementally (pod by pod)
- Sales Enablement is complete reference example
- All patterns established, just need execution
- No architectural changes needed
- Pure data and presentation work

---

**See Also:**
- `docs/executive-prototype-approach.md` - Vision and principles
- `frontend/src/data/salesEnablementData.js` - Complete pod example
- `EXECUTIVE_PROTOTYPE_PLAN.md` - Original implementation plan
