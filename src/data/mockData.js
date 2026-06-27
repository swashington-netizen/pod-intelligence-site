// Executive briefing data - Business-focused metrics and strategic narrative

// Portfolio strategy and mission
export const portfolioStrategy = {
  mission: 'Transform SMB sales productivity through AI-powered orchestration, delivering measurable revenue acceleration and operational efficiency at scale.',
  whyNow: 'SMB segment represents $2.8B in annual revenue with 40% of reps not meeting quota. AI orchestration offers a step-function improvement in both rep productivity and deal velocity.',
  strategicBet: 'Revenue Orchestration (RIS) as the foundational platform, with supporting pods addressing complementary workflow, analytics, and communication needs.'
};

// Business outcome metrics (not internal pod metrics)
export const businessOutcomes = [
  {
    label: 'Revenue Impact',
    value: '$127M',
    description: 'Projected annual lift',
    trend: 'up',
    color: '#027E46'
  },
  {
    label: 'Deal Velocity',
    value: '+35%',
    description: 'Faster close cycles',
    trend: 'up',
    color: '#0176D3'
  },
  {
    label: 'Rep Productivity',
    value: '+60%',
    description: 'Time saved on operations',
    trend: 'up',
    color: '#0176D3'
  },
  {
    label: 'At-Risk Revenue',
    value: '$890M',
    description: 'Addressed by portfolio',
    trend: 'stable',
    color: '#706E6B'
  }
];

// Current executive priorities (Q3 2026)
export const executivePriorities = [
  {
    id: 1,
    priority: 'Ship RIS to Production',
    rationale: 'Unlocks $50M+ in year-one revenue impact for SMB segment',
    owner: 'Product & Engineering',
    timeline: 'Q3 2026',
    status: 'on-track',
    blockers: 'None'
  },
  {
    id: 2,
    priority: 'Validate Pipeline Impact',
    rationale: 'Prove 25%+ improvement in deal velocity with pilot cohort',
    owner: 'Sales Leadership',
    timeline: 'Q3 2026',
    status: 'on-track',
    blockers: 'None'
  },
  {
    id: 3,
    priority: 'Secure FY27 Investment',
    rationale: 'Scale from 1 to 6 pods requires incremental engineering capacity',
    owner: 'Product Leadership',
    timeline: 'Q4 2026',
    status: 'in-progress',
    blockers: 'Awaiting ROI validation'
  }
];

// Why RIS is the strategic priority
export const risRationale = {
  title: 'Why SMB Revenue Orchestration First',
  reasons: [
    {
      point: 'Largest Revenue Opportunity',
      detail: '$2.8B SMB segment with measurable inefficiencies'
    },
    {
      point: 'Proven Demand',
      detail: '89% of reps cite manual work as #1 productivity barrier'
    },
    {
      point: 'Foundation for Portfolio',
      detail: 'Other pods integrate with RIS orchestration layer'
    }
  ]
};

// Strategic milestones (not technical releases)
export const strategicMilestones = [
  {
    id: 1,
    quarter: 'Q3 2026',
    milestone: 'RIS Production Launch',
    impact: 'Enable 1,200 SMB reps with AI orchestration',
    status: 'critical'
  },
  {
    id: 2,
    quarter: 'Q4 2026',
    milestone: 'Validate Business Case',
    impact: 'Prove revenue lift and secure FY27 funding',
    status: 'active'
  },
  {
    id: 3,
    quarter: 'Q1 2027',
    milestone: 'Portfolio Expansion',
    impact: 'Scale to full 6-pod ecosystem',
    status: 'planning'
  }
];

// How pods relate strategically (not technically)
export const podRelationships = [
  {
    hub: 'RIS',
    role: 'Core orchestration platform',
    connections: [
      { pod: 'Pod 2', relationship: 'Provides workflow automation' },
      { pod: 'Pod 3', relationship: 'Delivers predictive analytics' },
      { pod: 'Pod 4', relationship: 'Handles quote generation' }
    ]
  }
];
