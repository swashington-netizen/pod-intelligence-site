# Product Roadmap

**Portfolio Intelligence Evolution**

Last Updated: June 26, 2026

---

## Vision

Transform Portfolio Intelligence from a static dashboard into an **automated content platform** that aggregates portfolio information from multiple sources and delivers executive-grade intelligence in real-time.

---

## Phase 1: Foundation ✅ **COMPLETE**

**Goal**: Build core React application with multi-portfolio support

**Timeline**: June 2026  
**Status**: ✅ Complete

### Delivered

- [x] React 19 application with React Router
- [x] Multi-portfolio support (2 portfolios, 10 pods)
- [x] Configuration-driven architecture
- [x] Reusable component library
- [x] Salesforce-inspired design system
- [x] Responsive layout
- [x] Express API backend
- [x] PostgreSQL database
- [x] GitHub Actions CI/CD
- [x] Heroku deployment

### Key Files

- `frontend/src/data/portfolioConfig.js`
- `frontend/src/data/podsConfig.js`
- `frontend/src/components/`
- `backend/index.js`

---

## Phase 2: Executive Portal 🚧 **IN PROGRESS**

**Goal**: Refine homepage and pod pages for executive consumption

**Timeline**: July-August 2026  
**Status**: 🚧 80% Complete

### In Progress

- [x] Executive homepage with business metrics
- [x] Strategic priorities section
- [x] Source attribution for metrics
- [x] Feedback form widget
- [ ] Polish pod detail pages
- [ ] Add "last updated" timestamps
- [ ] Mobile responsive refinements

### Success Criteria

- Homepage is scannable in <30 seconds
- All metrics have "so what?" context
- Source links work and are clear
- Feedback form has >50% response rate

---

## Phase 3: Content Platform 📋 **PLANNED**

**Goal**: Move from static config to database-backed content

**Timeline**: September-October 2026  
**Status**: 📋 Planning

### Planned Features

- [ ] Database-backed content (migrate from static files)
- [ ] Admin UI for content management
- [ ] Content versioning and history
- [ ] Approval workflow for changes
- [ ] Audit trail (who changed what, when)
- [ ] Preview mode (see changes before publishing)

### Technical Work

- [ ] API endpoints for CRUD operations
- [ ] Authentication and authorization
- [ ] Admin dashboard UI
- [ ] Database migrations
- [ ] Content validation rules

### Success Criteria

- Content updates don't require git commits
- Non-developers can update pod content
- Change history is visible and queryable

---

## Phase 4: Slack Publishing 📋 **PLANNED**

**Goal**: Automate content publishing from Slack Canvas

**Timeline**: October-December 2026  
**Status**: 📋 High Priority

### Planned Features

- [ ] Slack Canvas integration
- [ ] Canvas-to-pod mapping (canvas_id field)
- [ ] Webhook endpoint for file_change events
- [ ] Content normalizer (Markdown → JSON)
- [ ] Cloudflare Queue for event processing
- [ ] Real-time updates (within 60s)

### Implementation Steps

1. Set up Slack app and Event Subscriptions
2. Deploy webhook endpoint
3. Create Canvas for each pod
4. Map Canvases to pods in database
5. Test end-to-end: edit Canvas → update portal
6. Roll out to pilot pod
7. Expand to all pods

### Success Criteria

- Pod owners publish from Slack Canvas, not git
- Updates appear in portal within 60 seconds
- >90% of Canvas updates process successfully
- No manual intervention required

### Related

- [Content Pipeline](content-pipeline.md)
- [ADR 0003: Slack Pipeline](adr/0003-slack-pipeline.md)

---

## Phase 5: Google Drive Integration 📋 **FUTURE**

**Goal**: Automatically link Drive documents to pods

**Timeline**: Q1 2027  
**Status**: 📋 Future

### Planned Features

- [ ] Google Drive webhook integration
- [ ] Watch specific Drive folders (one per pod)
- [ ] Fetch document metadata (title, URL, last modified)
- [ ] Store in resources table
- [ ] Display in pod "Resources" section
- [ ] Search across Drive documents (optional)

### Technical Work

- [ ] Google Drive API integration
- [ ] OAuth setup for Drive access
- [ ] Webhook receiver for Drive events
- [ ] Resources table and API endpoints
- [ ] UI for browsing linked documents

### Success Criteria

- Documents auto-appear in pod resources
- Links stay up-to-date when files move
- Users can find documents quickly

---

## Phase 6: Search 📋 **FUTURE**

**Goal**: Enable full-text search across all portfolios

**Timeline**: Q2 2027  
**Status**: 📋 Future

### Planned Features

- [ ] Search box in navigation
- [ ] Full-text search across pods, initiatives, metrics
- [ ] Filters (portfolio, pod, status)
- [ ] Search result highlighting
- [ ] Recent searches
- [ ] Suggested searches

### Technical Options

- Algolia (hosted search)
- Elasticsearch (self-hosted)
- PostgreSQL full-text search
- Cloudflare Workers + D1 FTS

### Success Criteria

- Users find pods/content in <5 seconds
- Search results are relevant
- Search is fast (<500ms)

---

## Phase 7: Analytics 📋 **FUTURE**

**Goal**: Understand how executives use the portal

**Timeline**: Q3 2027  
**Status**: 📋 Future

### Planned Features

- [ ] Page view tracking
- [ ] Click tracking (which pods, metrics viewed)
- [ ] Session duration
- [ ] User identification (internal SSO)
- [ ] Dashboard for usage insights
- [ ] A/B testing framework

### Privacy Considerations

- No PII collection
- Aggregated metrics only
- Opt-out mechanism
- Data retention policy

### Success Criteria

- Know which pods are most viewed
- Understand user journey (homepage → pod → feedback)
- Identify unused content

---

## Phase 8: Enterprise Readiness 📋 **FUTURE**

**Goal**: Production-grade reliability and security

**Timeline**: Q4 2027  
**Status**: 📋 Future

### Planned Features

- [ ] SSO/SAML authentication
- [ ] Role-based access control
- [ ] Uptime SLA (99.9%)
- [ ] Disaster recovery plan
- [ ] Security audit and pen testing
- [ ] Compliance documentation
- [ ] API rate limiting
- [ ] Advanced monitoring and alerting

### Success Criteria

- 99.9% uptime
- <1s p95 latency
- Zero security incidents
- Passes security audit

---

## Future Ideas (No Timeline)

### Content Features

- **Linear Integration**: Pull initiatives from Linear
- **Jira Integration**: Link epics to pods
- **Confluence Integration**: Link wiki pages
- **Metrics Dashboard**: Time-series metrics charts
- **Roadmap Visualization**: Interactive roadmap timeline
- **Org Chart**: Link pod owners to org structure

### UX Features

- **Dark Mode**: Optional dark theme
- **Customizable Dashboard**: Users can reorder sections
- **Email Digests**: Weekly summary emails
- **Mobile App**: Native iOS/Android apps
- **Notifications**: Alert on pod updates
- **Bookmarks**: Save favorite pods

### Technical Enhancements

- **GraphQL API**: Replace REST with GraphQL
- **Real-Time Updates**: WebSocket for live updates
- **Offline Support**: Service Worker for offline access
- **Export**: PDF export of pod pages
- **API for External Tools**: Public API for integrations

---

## Milestones

| Milestone | Target Date | Status |
|-----------|-------------|--------|
| **v1.0** - Foundation Complete | June 2026 | ✅ Complete |
| **v1.1** - Executive Portal Polish | Aug 2026 | 🚧 In Progress |
| **v2.0** - Content Platform | Oct 2026 | 📋 Planned |
| **v2.1** - Slack Publishing | Dec 2026 | 📋 Planned |
| **v3.0** - Google Drive Integration | Q1 2027 | 📋 Future |
| **v3.1** - Search | Q2 2027 | 📋 Future |
| **v4.0** - Analytics | Q3 2027 | 📋 Future |
| **v5.0** - Enterprise Ready | Q4 2027 | 📋 Future |

---

## Release Strategy

### Versioning

- **Major** (v1.0 → v2.0): New user-facing features
- **Minor** (v1.0 → v1.1): Enhancements, polish
- **Patch** (v1.1.0 → v1.1.1): Bug fixes

### Deployment

- **Continuous Deployment**: Every merge to `main` deploys
- **Feature Flags**: New features hidden behind flags
- **Phased Rollout**: Pilot with one pod, expand gradually

### Communication

- **Release Notes**: Published for each version
- **Changelog**: Maintained in `CHANGELOG.md`
- **User Announcements**: Slack channel for updates

---

## Success Metrics

### Product Metrics

- **Active Users**: Unique users per week
- **Engagement**: Average session duration
- **Pod Views**: Views per pod
- **Feedback Rate**: Feedback submissions per week
- **Search Usage**: Searches per day (post-search launch)

### Technical Metrics

- **Uptime**: 99.9% target
- **Latency**: <1s p95
- **Error Rate**: <1%
- **Deploy Frequency**: Daily
- **Time to Resolution**: <4 hours for critical bugs

### Business Metrics

- **Executive Adoption**: % of leadership using portal
- **Content Freshness**: Days since last pod update
- **Self-Service**: Reduction in "pod status" Slack questions

---

## Prioritization Framework

### High Priority

- Directly impacts executives
- Reduces operational overhead
- Enables future phases
- Quick wins (<1 month)

### Medium Priority

- Improves UX for existing features
- Technical debt reduction
- Nice-to-have features

### Low Priority

- Speculative features
- Niche use cases
- High effort, low impact

---

## Related Documentation

- [Architecture](architecture.md)
- [Content Pipeline](content-pipeline.md)
- [Decisions Log](decisions.md)
