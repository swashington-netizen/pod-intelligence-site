// Enhanced pod details with all section data

export const podDetails = {
  ris: {
    mission: 'Empower SMB sales teams with AI-driven revenue intelligence that accelerates deal velocity, optimizes pipeline health, and automates repetitive workflows.',
    businessValue: {
      primary: 'Increase SMB revenue by 25% through intelligent orchestration and automation',
      secondary: [
        'Reduce manual sales operations by 60%',
        'Improve forecast accuracy to 90%+',
        'Accelerate deal cycles by 40%',
        'Scale SMB sales without proportional headcount growth'
      ]
    },
    metrics: [
      { label: 'Deals Accelerated', value: '234', trend: 'up', period: 'This Month' },
      { label: 'Pipeline Value', value: '$12.4M', trend: 'up', period: 'Current Quarter' },
      { label: 'Automation Rate', value: '67%', trend: 'up', period: 'vs. Q2' },
      { label: 'Forecast Accuracy', value: '89%', trend: 'stable', period: 'Last 90 Days' }
    ],
    roadmap: [
      { phase: 'Phase 1', quarter: 'Q2 2026', title: 'MVP Launch', status: 'completed', items: ['Core pipeline analysis', 'Basic automation workflows', 'Salesforce integration'] },
      { phase: 'Phase 2', quarter: 'Q3 2026', title: 'Scale & Refine', status: 'active', items: ['Advanced forecasting models', 'Multi-channel orchestration', 'Executive dashboards'] },
      { phase: 'Phase 3', quarter: 'Q4 2026', title: 'Enterprise Expansion', status: 'planning', items: ['Enterprise segment support', 'Partner ecosystem integration', 'Predictive analytics'] }
    ],
    activeProjects: [
      { id: 1, name: 'Deal Acceleration Engine', status: 'active', progress: 75, team: '8 engineers', dueDate: 'Q3 2026' },
      { id: 2, name: 'Forecasting Model v2', status: 'active', progress: 60, team: '5 engineers', dueDate: 'Q3 2026' },
      { id: 3, name: 'Slack Integration', status: 'active', progress: 40, team: '3 engineers', dueDate: 'Q4 2026' }
    ],
    architecture: {
      description: 'Event-driven microservices architecture with real-time data processing and ML-powered insights',
      components: [
        'Revenue Intelligence Engine',
        'Workflow Orchestrator',
        'Salesforce Connector',
        'Analytics Pipeline',
        'ML Prediction Service'
      ],
      integrations: ['Salesforce', 'Slack', 'Google Workspace', 'Analytics Platform']
    },
    relatedDocs: [
      { title: 'Product Vision & Strategy', type: 'presentation', updated: '2026-06-20' },
      { title: 'Technical Architecture Overview', type: 'document', updated: '2026-06-15' },
      { title: 'Q3 Roadmap Details', type: 'document', updated: '2026-06-10' },
      { title: 'User Research Findings', type: 'presentation', updated: '2026-06-05' }
    ],
    slackChannels: [
      { name: '#ris-general', description: 'General discussion and updates', memberCount: 45 },
      { name: '#ris-eng', description: 'Engineering team coordination', memberCount: 15 },
      { name: '#ris-product', description: 'Product planning and feedback', memberCount: 12 }
    ],
    demos: [
      { title: 'Deal Acceleration Demo', date: '2026-06-18', audience: 'Executive Team' },
      { title: 'Forecasting Features Walkthrough', date: '2026-06-10', audience: 'Sales Leadership' }
    ],
    faqs: [
      { q: 'When will RIS be available to all SMB reps?', a: 'Full rollout is planned for Q3 2026 following completion of Phase 2 testing and training materials.' },
      { q: 'How does RIS integrate with existing Salesforce workflows?', a: 'RIS uses bi-directional sync with Salesforce, automatically updating records and pulling real-time data without disrupting current processes.' },
      { q: 'What\'s the expected ROI?', a: 'Early pilots show 25% increase in deal velocity and 60% reduction in manual sales operations, translating to $2M+ annual value for SMB segment.' },
      { q: 'Can RIS work with other CRM systems?', a: 'Phase 1 focuses on Salesforce. Multi-CRM support is planned for Phase 3 in Q4 2026.' }
    ],
    relatedPods: ['pod-2', 'pod-3']
  },
  'pod-2': {
    mission: 'Deliver intelligent automation and insights for sales productivity.',
    businessValue: {
      primary: 'Increase sales team efficiency by 30% through intelligent automation',
      secondary: [
        'Reduce administrative overhead',
        'Improve data quality',
        'Enable faster decision-making'
      ]
    },
    metrics: [
      { label: 'Active Users', value: '156', trend: 'up', period: 'This Quarter' },
      { label: 'Time Saved', value: '2,400h', trend: 'up', period: 'Monthly' },
      { label: 'Adoption Rate', value: '78%', trend: 'stable', period: 'Team Wide' }
    ],
    roadmap: [
      { phase: 'Phase 1', quarter: 'Q3 2026', title: 'Alpha Release', status: 'active', items: ['Core features', 'Initial testing'] },
      { phase: 'Phase 2', quarter: 'Q4 2026', title: 'Beta & Launch', status: 'planning', items: ['Scale testing', 'Full deployment'] }
    ],
    activeProjects: [
      { id: 1, name: 'Core Platform Build', status: 'active', progress: 55, team: '6 engineers', dueDate: 'Q3 2026' }
    ],
    architecture: {
      description: 'Cloud-native platform with API-first design and real-time data sync',
      components: ['Core Service', 'API Gateway', 'Data Layer'],
      integrations: ['Salesforce', 'Slack']
    },
    relatedDocs: [
      { title: 'Product Requirements', type: 'document', updated: '2026-06-15' },
      { title: 'Technical Spec', type: 'document', updated: '2026-06-10' }
    ],
    slackChannels: [
      { name: '#pod-2-general', description: 'Team updates', memberCount: 25 }
    ],
    demos: [
      { title: 'Alpha Demo', date: '2026-06-12', audience: 'Pilot Users' }
    ],
    faqs: [
      { q: 'When will this be available?', a: 'Alpha release planned for Q3 2026.' },
      { q: 'Who is the target user?', a: 'Sales representatives and sales operations teams.' }
    ],
    relatedPods: ['ris', 'pod-4']
  },
  'pod-3': {
    mission: 'Enable data-driven sales strategies through advanced analytics and intelligence.',
    businessValue: {
      primary: 'Improve sales outcomes through actionable insights and predictive analytics',
      secondary: [
        'Better territory planning',
        'Improved lead scoring',
        'Data-driven coaching'
      ]
    },
    metrics: [
      { label: 'Insights Generated', value: '1,240', trend: 'up', period: 'This Month' },
      { label: 'Models Deployed', value: '12', trend: 'stable', period: 'Production' },
      { label: 'Accuracy Rate', value: '85%', trend: 'up', period: 'Average' }
    ],
    roadmap: [
      { phase: 'Phase 1', quarter: 'Q3 2026', title: 'Platform Foundation', status: 'active', items: ['Data pipeline', 'Core models'] },
      { phase: 'Phase 2', quarter: 'Q4 2026', title: 'Advanced Features', status: 'planning', items: ['Predictive models', 'Dashboards'] }
    ],
    activeProjects: [
      { id: 1, name: 'Analytics Platform', status: 'active', progress: 45, team: '7 engineers', dueDate: 'Q3 2026' }
    ],
    architecture: {
      description: 'Data lake architecture with ML pipeline and visualization layer',
      components: ['Data Warehouse', 'ML Pipeline', 'Visualization Engine'],
      integrations: ['Salesforce', 'Data Platform']
    },
    relatedDocs: [
      { title: 'Analytics Strategy', type: 'presentation', updated: '2026-06-18' }
    ],
    slackChannels: [
      { name: '#pod-3-team', description: 'Team coordination', memberCount: 18 }
    ],
    demos: [],
    faqs: [
      { q: 'What data sources are supported?', a: 'Currently Salesforce, with additional sources planned for Q4.' }
    ],
    relatedPods: ['ris', 'pod-5']
  },
  'pod-4': {
    mission: 'Streamline sales operations and automate repetitive tasks.',
    businessValue: {
      primary: 'Reduce operational overhead by 50% through intelligent automation',
      secondary: [
        'Faster quote generation',
        'Automated reporting',
        'Simplified workflows'
      ]
    },
    metrics: [
      { label: 'Tasks Automated', value: '890', trend: 'up', period: 'Weekly' },
      { label: 'Time Savings', value: '35%', trend: 'up', period: 'vs. Manual' },
      { label: 'Error Rate', value: '0.2%', trend: 'down', period: 'Last 30 Days' }
    ],
    roadmap: [
      { phase: 'Phase 1', quarter: 'Q4 2026', title: 'Core Automation', status: 'planning', items: ['Workflow engine', 'Basic rules'] }
    ],
    activeProjects: [
      { id: 1, name: 'Automation Framework', status: 'planning', progress: 20, team: '4 engineers', dueDate: 'Q4 2026' }
    ],
    architecture: {
      description: 'Rules-based automation engine with workflow orchestration',
      components: ['Workflow Engine', 'Rules Service'],
      integrations: ['Salesforce']
    },
    relatedDocs: [
      { title: 'Requirements Doc', type: 'document', updated: '2026-06-08' }
    ],
    slackChannels: [
      { name: '#pod-4-updates', description: 'Status updates', memberCount: 12 }
    ],
    demos: [],
    faqs: [
      { q: 'When does this launch?', a: 'Planning for Q4 2026 release.' }
    ],
    relatedPods: ['pod-2']
  },
  'pod-5': {
    mission: 'Enhance customer engagement through AI-powered communication tools.',
    businessValue: {
      primary: 'Improve customer response rates by 40% with personalized communication',
      secondary: [
        'Faster response times',
        'Better engagement metrics',
        'Personalized outreach at scale'
      ]
    },
    metrics: [
      { label: 'Messages Sent', value: '12.5K', trend: 'up', period: 'This Month' },
      { label: 'Response Rate', value: '42%', trend: 'up', period: 'vs. Baseline' },
      { label: 'Engagement Score', value: '7.8/10', trend: 'stable', period: 'Average' }
    ],
    roadmap: [
      { phase: 'Phase 1', quarter: 'Q4 2026', title: 'Pilot Launch', status: 'planning', items: ['Email templates', 'Basic personalization'] }
    ],
    activeProjects: [
      { id: 1, name: 'Communication Engine', status: 'planning', progress: 15, team: '5 engineers', dueDate: 'Q4 2026' }
    ],
    architecture: {
      description: 'AI-powered communication platform with multi-channel support',
      components: ['NLP Engine', 'Template Service'],
      integrations: ['Email', 'Salesforce']
    },
    relatedDocs: [
      { title: 'Product Brief', type: 'document', updated: '2026-06-05' }
    ],
    slackChannels: [
      { name: '#pod-5-general', description: 'General updates', memberCount: 14 }
    ],
    demos: [],
    faqs: [
      { q: 'What channels are supported?', a: 'Initially email, with SMS and Slack planned for later phases.' }
    ],
    relatedPods: ['pod-3']
  },
  'pod-6': {
    mission: 'Build a unified sales intelligence platform connecting all pods.',
    businessValue: {
      primary: 'Create a single source of truth for all sales intelligence and automation',
      secondary: [
        'Unified data model',
        'Cross-pod insights',
        'Integrated workflows'
      ]
    },
    metrics: [
      { label: 'Integration Points', value: '18', trend: 'up', period: 'Active' },
      { label: 'Data Sync Rate', value: '99.8%', trend: 'stable', period: 'Uptime' },
      { label: 'API Calls', value: '2.1M', trend: 'up', period: 'Daily' }
    ],
    roadmap: [
      { phase: 'Phase 1', quarter: 'Q4 2026', title: 'Foundation', status: 'planning', items: ['Integration framework', 'Data model'] }
    ],
    activeProjects: [
      { id: 1, name: 'Integration Platform', status: 'planning', progress: 10, team: '6 engineers', dueDate: 'Q4 2026' }
    ],
    architecture: {
      description: 'Central integration hub with unified API and data synchronization',
      components: ['API Gateway', 'Sync Engine', 'Data Hub'],
      integrations: ['All Pods', 'Salesforce', 'External APIs']
    },
    relatedDocs: [
      { title: 'Architecture Overview', type: 'document', updated: '2026-06-12' }
    ],
    slackChannels: [
      { name: '#pod-6-engineering', description: 'Engineering coordination', memberCount: 16 }
    ],
    demos: [],
    faqs: [
      { q: 'How does this connect to other pods?', a: 'Pod 6 provides the integration layer that all other pods can leverage for data sharing and workflow orchestration.' }
    ],
    relatedPods: ['ris', 'pod-2', 'pod-3', 'pod-4', 'pod-5']
  }
};

// Helper to get detailed pod data
export const getPodDetails = (podId) => podDetails[podId] || null;
