// Portfolio Configuration - Business Stakeholder Version
// This file drives all content on the landing page
// Update this file to change what stakeholders see (no code changes needed)

export const portfolioConfig = {
  // Portfolio Overview
  portfolio: {
    name: "Agentic Sales Productivity",
    headline: "AI-powered tools that accelerate revenue and reduce manual work for SMB sales teams",
    mission: "Increase SMB deal velocity by 25%+ while reducing rep administrative burden by 60%, unlocking $127M in annual revenue opportunity.",

    // Executive Summary for walking deck
    executiveSummary: {
      problem: "SMB reps spend 60% of their time on non-selling activities, leading to missed quota and pipeline stagnation.",
      solution: "AI orchestration platform that automates workflows, accelerates deals, and provides real-time intelligence.",
      opportunity: "$2.8B SMB segment with proven demand from 89% of reps citing manual work as top barrier."
    }
  },

  // Business Impact Metrics (with sources)
  businessMetrics: [
    {
      label: "Projected Revenue Impact",
      value: "$127M",
      context: "Annual incremental revenue from faster deal cycles and improved win rates",
      source: "FY26 Business Case Model",
      trend: "up"
    },
    {
      label: "Deal Velocity Improvement",
      value: "+35%",
      context: "Reduction in average sales cycle length for SMB segment",
      source: "Q2 Pilot Results (N=150 reps)",
      trend: "up"
    },
    {
      label: "Time Saved Per Rep",
      value: "12 hrs/week",
      context: "Hours freed from manual tasks to focus on selling activities",
      source: "Rep Survey & Telemetry (Q3 2026)",
      trend: "up"
    },
    {
      label: "Reps Enabled",
      value: "1,200",
      context: "SMB reps who will gain access to AI orchestration capabilities",
      source: "GTM Rollout Plan",
      trend: "stable"
    }
  ],

  // Strategic Priority Pod (RIS)
  strategicPod: {
    id: "ris",
    name: "SMB Revenue Orchestration",
    shortName: "RIS",
    headline: "The core AI platform that coordinates deal acceleration, forecasting, and workflow automation",

    // Why this is the priority
    strategicRationale: {
      title: "Why RIS is Our Current Investment Priority",
      reasons: [
        "Addresses the largest revenue opportunity ($50M+ year-one impact)",
        "Validated by pilot: 25% improvement in deal close rates",
        "Foundation layer that other pods integrate with"
      ]
    },

    // Key Initiatives with clear status
    keyInitiatives: [
      {
        name: "Production Launch",
        status: "In Progress",
        timeline: "Q3 2026",
        description: "Deploy to 1,200 SMB reps across all regions",
        owner: "Product & Engineering",
        nextMilestone: "Complete security review by July 15"
      },
      {
        name: "Business Case Validation",
        status: "On Track",
        timeline: "Q3 2026",
        description: "Prove revenue lift with expanded pilot cohort",
        owner: "Sales Ops & Analytics",
        nextMilestone: "Close 500 deals using RIS workflows"
      }
    ],

    // Impact Metrics specific to RIS
    impactMetrics: [
      {
        metric: "Deals Accelerated",
        value: "234",
        context: "Deals closed faster using RIS workflows this quarter",
        source: "Salesforce Analytics (Q3 2026)"
      },
      {
        metric: "Forecast Accuracy",
        value: "89%",
        context: "Up from 72% baseline without AI orchestration",
        source: "Sales Ops Weekly Report"
      }
    ],

    // What we need from stakeholders
    asks: [
      {
        ask: "Approve FY27 funding to scale from 1 to 6 pods",
        rationale: "Validated ROI unlocks broader portfolio investment",
        decision: "Needed by Q4 2026 for hiring and planning"
      }
    ]
  },

  // Supporting Pods (brief, business-focused)
  supportingPods: [
    {
      id: "pod-2",
      name: "Workflow Automation",
      shortName: "POD2",
      headline: "Eliminate repetitive tasks like data entry and follow-ups",
      status: "Planning",
      timeline: "Q4 2026",
      businessValue: "Save 8 hrs/week per rep on manual operations"
    },
    {
      id: "pod-3",
      name: "Predictive Analytics",
      shortName: "POD3",
      headline: "Surface at-risk deals and recommend next-best actions",
      status: "Planning",
      timeline: "Q1 2027",
      businessValue: "Reduce pipeline slippage by 20%"
    },
    {
      id: "pod-4",
      name: "Quote Automation",
      shortName: "POD4",
      headline: "Generate accurate quotes instantly from deal context",
      status: "Concept",
      timeline: "Q1 2027",
      businessValue: "Cut quote turnaround time from 3 days to 30 minutes"
    },
    {
      id: "pod-5",
      name: "Customer Engagement",
      shortName: "POD5",
      headline: "Personalized outreach at scale using AI",
      status: "Concept",
      timeline: "Q2 2027",
      businessValue: "Increase response rates by 40%"
    },
    {
      id: "pod-6",
      name: "Integration Hub",
      shortName: "POD6",
      headline: "Connect all tools and data sources into unified platform",
      status: "Concept",
      timeline: "Q2 2027",
      businessValue: "Single source of truth for sales intelligence"
    }
  ],

  // Strategic Roadmap (business milestones)
  roadmap: [
    {
      quarter: "Q3 2026",
      milestone: "RIS Production Launch",
      goal: "Enable 1,200 reps with AI orchestration",
      success: "95% adoption and positive NPS from pilot users"
    },
    {
      quarter: "Q4 2026",
      milestone: "Validate Revenue Impact",
      goal: "Prove $50M+ annual value with telemetry data",
      success: "Secure FY27 investment for portfolio expansion"
    },
    {
      quarter: "Q1-Q2 2027",
      milestone: "Scale to Full Portfolio",
      goal: "Launch 4 additional pods, integrate ecosystem",
      success: "Address full SMB productivity opportunity"
    }
  ],

  // How to contact team / provide feedback
  contact: {
    team: "Agentic Sales Productivity Team",
    primaryContact: "Product Lead",
    feedbackPrompt: "Have questions or feedback? Let us know below and we'll follow up within 24 hours."
  }
};

// Helper to get any config value
export const getConfig = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], portfolioConfig);
};
