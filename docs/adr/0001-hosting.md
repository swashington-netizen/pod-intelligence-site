# ADR 0001: Cloudflare Platform for Hosting

**Date**: June 26, 2026  
**Status**: Proposed (Target State)  
**Deciders**: Engineering Team, Product Leadership  
**Current State**: Heroku + GitHub Pages

---

## Context

Portfolio Intelligence requires scalable, cost-effective hosting for:
- Static frontend (React SPA)
- API backend (Express server)
- Database (structured content)
- Event processing (Slack webhooks)

### Requirements

1. **Global Performance**: Low latency for international users
2. **Cost-Effective**: Internal tool with limited budget
3. **Developer Experience**: Easy deployment and debugging
4. **Scalability**: Handle 10x traffic without architecture changes
5. **Reliability**: 99.9% uptime SLA
6. **Integrations**: Support for webhooks, queues, scheduled jobs

### Current Pain Points (Heroku + GitHub Pages)

- **Cost**: ~$12/month for basic tier, scales expensively
- **Cold Starts**: Heroku dyno sleeps after 30min inactivity
- **Geographic Latency**: Single US region
- **Limited Free Tier**: Only 1000 dyno hours/month free
- **Uncertain Future**: Salesforce's Heroku roadmap unclear

---

## Decision

**Migrate to Cloudflare platform:**
- **Frontend**: Cloudflare Pages
- **Backend**: Cloudflare Workers
- **Database**: Cloudflare D1 (SQLite)
- **Event Processing**: Cloudflare Queues
- **DNS/CDN**: Cloudflare (already using)

---

## Alternatives Considered

### Option 1: AWS (Lambda + API Gateway + RDS)

**Pros**:
- Most mature cloud platform
- Rich feature set (200+ services)
- Strong ecosystem and tooling
- Team familiarity

**Cons**:
- Complex setup (VPCs, security groups, IAM)
- Higher cost (~$50-100/month for equivalent setup)
- Slower cold starts (Lambda: 100-500ms)
- More operational overhead

**Verdict**: ❌ Rejected - Too complex and expensive for internal tool

### Option 2: Vercel + Supabase

**Pros**:
- Excellent developer experience
- Integrated frontend + backend
- Fast deployments
- Great documentation

**Cons**:
- Higher cost at scale (Vercel Pro: $20/month + usage)
- Limited control over infrastructure
- Supabase is PostgreSQL-based (less edge-optimized)

**Verdict**: ❌ Rejected - Good DX but more expensive than Cloudflare

### Option 3: Stay on Heroku + GitHub Pages

**Pros**:
- No migration effort
- Known platform
- Working today

**Cons**:
- Higher cost (Basic: $7/month, Standard: $25/month)
- Single region (higher latency)
- Cold starts (free tier sleeps)
- Uncertain Salesforce/Heroku roadmap
- No edge computing

**Verdict**: ❌ Rejected - More expensive, less performant, uncertain future

### Option 4: Cloudflare Platform ✅

**Pros**:
- **Cost**: $0-5/month (generous free tier)
- **Performance**: Edge network, <5ms cold starts
- **DX**: Wrangler CLI, local dev, easy deployment
- **Integrated**: Pages, Workers, D1, Queues work together
- **Scalable**: Automatic scaling, no capacity planning
- **Global**: 280+ edge locations worldwide

**Cons**:
- Learning curve (new platform)
- D1 is newer, less mature than RDS
- Vendor lock-in (Cloudflare-specific APIs)
- Migration effort required

**Verdict**: ✅ **Selected** - Best balance of cost, performance, and DX

---

## Detailed Comparison

### Cost Analysis

| Component | Heroku | AWS | Vercel + Supabase | Cloudflare |
|-----------|--------|-----|-------------------|------------|
| Frontend | $0 (GH Pages) | $1-2 (S3+CF) | $20 (Pro) | $0 (Pages free) |
| Backend | $7 (Basic) | $15-30 (Lambda) | Included | $0-5 (Workers) |
| Database | $0-5 (Mini) | $15-30 (RDS) | $25 (Pro) | $0-5 (D1) |
| **Total/mo** | **$7-12** | **$31-62** | **$45-50** | **$0-10** |

### Performance Comparison

| Metric | Heroku | AWS | Cloudflare |
|--------|--------|-----|------------|
| Cold Start | 5-10s | 100-500ms | <5ms |
| P50 Latency | 200ms (US) | 50-100ms | 10-30ms (edge) |
| Geographic | Single region | Multi-region | 280+ locations |
| Scaling | Manual dyno scaling | Auto-scale (slow) | Instant |

### Developer Experience

| Feature | Heroku | AWS | Cloudflare |
|---------|--------|-----|------------|
| Local Dev | ✅ Easy | ⚠️ Complex (SAM) | ✅ Wrangler |
| Deployment | ✅ Git push | ⚠️ Complex (CDK) | ✅ Wrangler deploy |
| Logs | ✅ heroku logs | ⚠️ CloudWatch | ✅ wrangler tail |
| Debugging | ✅ Good | ⚠️ Limited | ✅ Good |

---

## Implementation Plan

### Phase 1: Preparation (Week 1)

- [ ] Learn Cloudflare Workers and D1
- [ ] Set up Cloudflare account
- [ ] Create test project
- [ ] Prototype Workers API

### Phase 2: Frontend Migration (Week 2)

- [ ] Deploy frontend to Cloudflare Pages
- [ ] Update environment variables
- [ ] Test routing, assets
- [ ] Update DNS (keep Heroku running)

### Phase 3: Backend Migration (Week 3-4)

- [ ] Rewrite Express routes as Workers
- [ ] Convert middleware to Workers patterns
- [ ] Test webhook handling
- [ ] Deploy to production Workers

### Phase 4: Database Migration (Week 5)

- [ ] Convert PostgreSQL schema to SQLite
- [ ] Export data from Heroku Postgres
- [ ] Import data into D1
- [ ] Dual-write to both databases
- [ ] Test data consistency

### Phase 5: Cutover (Week 6)

- [ ] Switch API requests to Workers
- [ ] Monitor errors and performance
- [ ] Fix issues
- [ ] Deprecate Heroku (keep for 1 month backup)

### Phase 6: Event Processing (Week 7)

- [ ] Migrate Slack webhook to Workers
- [ ] Implement Cloudflare Queue consumer
- [ ] Test end-to-end Slack → D1 flow

---

## Consequences

### Positive

- **✅ Cost Savings**: $7-12/mo → $0-5/mo (~50-80% reduction)
- **✅ Performance**: Faster response times (edge computing)
- **✅ Reliability**: Cloudflare's 100% uptime SLA
- **✅ Scalability**: Automatic, elastic scaling
- **✅ Developer Experience**: Wrangler CLI is excellent
- **✅ Future-Proof**: Cloudflare is investing heavily in edge

### Negative

- **❌ Migration Effort**: ~6-7 weeks of work
- **❌ Learning Curve**: New platform and patterns
- **❌ Vendor Lock-In**: Harder to migrate away from Cloudflare
- **❌ D1 Maturity**: D1 is newer, may have rough edges

### Neutral

- **⚖️ SQLite vs. Postgres**: D1 is SQLite-based, different from Postgres (acceptable tradeoffs)
- **⚖️ Workers vs. Express**: Different programming model (async, stateless)

---

## Risks and Mitigations

### Risk 1: D1 Limitations

**Risk**: SQLite lacks some PostgreSQL features (arrays, full-text search)

**Mitigation**:
- Current schema is simple, no advanced features used
- Can add Algolia for full-text search if needed
- D1 supports JSON, sufficient for content storage

### Risk 2: Migration Bugs

**Risk**: Data loss or corruption during migration

**Mitigation**:
- Dual-write to both databases during transition
- Keep Heroku running for 1 month as backup
- Test thoroughly in staging environment
- Incremental cutover (frontend → backend → database)

### Risk 3: Performance Regressions

**Risk**: Edge computing may have cold start or consistency issues

**Mitigation**:
- Load testing before cutover
- Gradual traffic shift (10% → 50% → 100%)
- Rollback plan (point DNS back to Heroku)

### Risk 4: Team Unfamiliarity

**Risk**: Team lacks Cloudflare Workers experience

**Mitigation**:
- Allocate time for learning and experimentation
- Start with simple migrations (frontend first)
- Document patterns and best practices
- Pair programming during complex migrations

---

## Success Criteria

### Performance

- [ ] P95 latency < 500ms (currently ~1s on Heroku)
- [ ] Cold start < 50ms (currently 5-10s on Heroku)
- [ ] 99.9% uptime (currently 99.5%)

### Cost

- [ ] Monthly cost < $10 (currently $7-12)
- [ ] No unexpected overages in first 3 months

### Reliability

- [ ] Zero data loss during migration
- [ ] < 1 hour downtime during cutover
- [ ] No P0 incidents in first month

### Developer Experience

- [ ] Deployment time < 2 minutes (currently ~5 minutes)
- [ ] Local development works smoothly
- [ ] Logs are accessible and useful

---

## Monitoring

### Metrics to Track Post-Migration

- Request volume and latency (P50, P95, P99)
- Error rates (4xx, 5xx)
- Database query performance
- Queue depth and processing time
- Cost per day

### Alerts

- Error rate > 1%
- P95 latency > 1s
- Queue depth > 100
- Daily cost > $1

---

## Related

- [Architecture](../architecture.md)
- [Deployment Guide](../deployment.md)
- [Decisions Log](../decisions.md)
- [ADR 0002: Content Model](0002-content-model.md)
- [ADR 0003: Slack Pipeline](0003-slack-pipeline.md)

---

## Notes

This is a **target state** decision. Current production deployment remains on Heroku + GitHub Pages. Migration will happen in Q3-Q4 2026 after validating the platform with a prototype.

**Approval Required**: Engineering Lead, Product Manager

**Last Reviewed**: June 26, 2026
