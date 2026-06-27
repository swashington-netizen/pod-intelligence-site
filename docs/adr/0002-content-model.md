# ADR 0002: Configuration-Driven Content Architecture

**Date**: June 26, 2026  
**Status**: Accepted  
**Deciders**: Engineering Team, Product Manager

---

## Context

Portfolio Intelligence displays information about multiple portfolios and pods. Content (pod names, missions, initiatives, metrics) needs to be easily updatable without requiring engineering involvement.

### Problem

How should we structure and store portfolio content to enable:
1. **Non-developer updates** - Product managers can update content
2. **Scalability** - Adding portfolios/pods doesn't require code changes
3. **Reusability** - Same components work for all portfolios
4. **Maintainability** - Clear separation between content and presentation

### Current Situation

Initial implementation hardcoded content in React components:

```javascript
// ❌ Problem: Content in components
function PodCard() {
  return (
    <div>
      <h2>SMB Revenue Orchestration</h2>
      <p>Drive revenue growth...</p>
    </div>
  );
}
```

This approach doesn't scale and requires developer changes for every content update.

---

## Decision

**Adopt a configuration-driven architecture where content is separated from components.**

Content lives in configuration files:
- `frontend/src/data/portfolioConfig.js`
- `frontend/src/data/podsConfig.js`
- `frontend/src/data/podDetails.js`

Components are pure renderers that accept data via props:

```javascript
// ✅ Solution: Configuration-driven
function PodCard({ pod }) {
  return (
    <div>
      <h2>{pod.name}</h2>
      <p>{pod.mission}</p>
    </div>
  );
}

// Usage
const pods = podsConfig.pods;
pods.map(pod => <PodCard pod={pod} />);
```

---

## Alternatives Considered

### Option 1: Hardcoded in Components

**Description**: Content lives directly in React components

**Pros**:
- Simplest to implement
- No additional files

**Cons**:
- Requires developer for every content change
- Doesn't scale to multiple portfolios
- Tight coupling between content and presentation

**Verdict**: ❌ Rejected - Not scalable

### Option 2: Headless CMS (Contentful, Strapi)

**Description**: Store content in external CMS, fetch via API

**Pros**:
- Rich editing experience (WYSIWYG)
- Version control, workflows, permissions
- Non-technical users can edit
- Mature platforms

**Cons**:
- Overkill for current needs (10 pods)
- Additional dependency and cost
- Network requests required
- More complex architecture

**Verdict**: ❌ Rejected - Too complex for v1, revisit in future

### Option 3: JSON/YAML Files

**Description**: Store content in static JSON or YAML files

**Pros**:
- Simple, no dependencies
- Version controlled (git)
- Easy to edit in text editor

**Cons**:
- Less developer-friendly than JavaScript objects
- No comments (JSON)
- YAML has indentation pitfalls

**Verdict**: ⚠️ Considered, but JavaScript files chosen for better DX

### Option 4: Configuration Files (JavaScript) ✅

**Description**: Content in JavaScript modules with exported objects

**Pros**:
- Simple, no external dependencies
- Comments supported
- Type-safe with JSDoc or TypeScript
- Version controlled
- Can include helper functions
- Familiar to developers

**Cons**:
- Still requires git commit to update
- Not accessible to non-technical users
- Deployment needed after changes

**Verdict**: ✅ **Selected** - Best balance for v1, clear migration path

---

## Implementation

### Configuration Structure

```javascript
// portfolioConfig.js
export const portfolioConfig = {
  portfolio: {
    id: 'agentic-sales-productivity',
    name: 'Agentic Sales Productivity',
    headline: 'AI-Powered Revenue Acceleration',
    mission: '...',
  },
  businessMetrics: [
    {
      label: 'Projected Revenue Impact',
      value: '$127M',
      context: 'Annual incremental revenue',
      source: 'FY26 Business Case Model',
    },
  ],
  strategicPod: { ... },
  supportingPods: [ ... ],
};
```

### Component Pattern

```javascript
// Pure component (presentation only)
function MetricCard({ metric }) {
  return (
    <div className="metric-card">
      <div className="metric-value">{metric.value}</div>
      <div className="metric-label">{metric.label}</div>
      <p className="metric-context">{metric.context}</p>
    </div>
  );
}

// Usage (data comes from config)
{portfolioConfig.businessMetrics.map(metric => (
  <MetricCard key={metric.label} metric={metric} />
))}
```

### File Organization

```
frontend/src/data/
├── portfolioConfig.js   # Portfolio-level: name, metrics, roadmap
├── podsConfig.js        # Pod metadata: name, status, initiatives
└── podDetails.js        # Detailed pod content: sections, FAQs
```

---

## Migration Path

### Current State (v1.0)

Content in JavaScript configuration files, deployed via git.

### Near-Term (v2.0)

Move configuration to database, expose via API:

```javascript
// Instead of importing static file
import { podsConfig } from './data/podsConfig';

// Fetch from API
const pods = await fetch('/api/pods').then(r => r.json());
```

Components remain unchanged (still receive props).

### Long-Term (v3.0)

Slack Canvas becomes content source:

```
Slack Canvas → Webhook → Normalizer → Database → API → React
```

Configuration-driven pattern remains, source changes.

---

## Consequences

### Positive

- **✅ Scalable**: Adding portfolios/pods is editing config, not code
- **✅ Reusable**: Components work for any portfolio
- **✅ Testable**: Can test components with mock data
- **✅ Maintainable**: Clear separation of concerns
- **✅ Future-Proof**: Easy migration to database or CMS

### Negative

- **❌ Git Required**: Content updates require git commit (for now)
- **❌ Deployment Needed**: Changes don't appear until deployed
- **❌ No UI**: No visual editor (config files only)
- **❌ Developer-Friendly Only**: Non-technical users can't edit

### Mitigations

- **Near-term**: Build admin UI for database-backed content
- **Long-term**: Slack Canvas provides UI for non-technical users
- **Immediate**: Document config file format clearly

---

## Rules and Conventions

### Components Must Never Hardcode Content

```javascript
// ❌ Bad
function PodCard() {
  return <div>SMB Revenue Orchestration</div>;
}

// ✅ Good
function PodCard({ name }) {
  return <div>{name}</div>;
}
```

### Configuration Files Must Be Well-Documented

```javascript
// ✅ Good: Documented structure
export const podsConfig = {
  // Array of pod groups (portfolios)
  groups: [
    {
      id: 'agentic-sales-productivity',  // Unique identifier (kebab-case)
      name: 'Agentic Sales Productivity', // Display name
      color: '#0B7B7B',                   // Brand color (hex)
      pods: [...]                         // Array of pod objects
    }
  ]
};
```

### Config Changes Must Include Tests

When adding new config fields, update corresponding tests:

```javascript
// pod.test.js
it('renders pod with all required fields', () => {
  const pod = {
    id: 'test-pod',
    name: 'Test Pod',
    mission: 'Test mission',
  };
  render(<PodCard pod={pod} />);
  expect(screen.getByText('Test Pod')).toBeInTheDocument();
});
```

---

## Validation

### Required Fields

Configuration objects must include required fields:

```javascript
// Portfolio (required)
{
  id: string,         // Unique identifier
  name: string,       // Display name
  headline: string,   // Brief description
  mission: string,    // Mission statement
}

// Pod (required)
{
  id: string,         // Unique identifier
  name: string,       // Display name
  slug: string,       // URL-friendly slug
  mission: string,    // Mission statement
}
```

### Validation Function (Future)

```javascript
function validatePortfolioConfig(config) {
  assert(config.portfolio.id, 'Portfolio must have id');
  assert(config.portfolio.name, 'Portfolio must have name');
  // ... more validations
}
```

---

## Documentation

### For Developers

- `frontend/src/data/README.md` - Config file format and examples
- Component prop types clearly documented
- Examples in Storybook (future)

### For Content Editors

- `docs/content-editing.md` - How to update pod content
- Template config files for new portfolios
- Validation checklist before commit

---

## Success Criteria

- [ ] All components accept data via props (no hardcoded content)
- [ ] Adding a new pod requires only config changes, no code changes
- [ ] Product managers can edit config files with minimal guidance
- [ ] CI/CD validates config structure before deployment

---

## Related

- [Architecture](../architecture.md#configuration-driven-design)
- [Decisions Log](../decisions.md#decision-3-configuration-driven-architecture)
- [ADR 0003: Slack Pipeline](0003-slack-pipeline.md)

---

## Approval

**Approved By**: Engineering Lead, Product Manager  
**Date**: June 2026  
**Status**: Implemented in v1.0
