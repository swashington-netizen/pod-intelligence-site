// Configuration for all pods in the Agentic Sales Productivity organization
// All content is driven from this file for easy updates

export const groups = [
  {
    id: 'agentic-sales-productivity',
    name: 'Agentic Sales Productivity',
    color: '#0B7B7B', // Teal/green branding
    pods: [
      {
        id: 'smb-revenue-orchestration',
        name: 'SMB Revenue Orchestration (RIS)',
        slug: 'smb-revenue-orchestration',
        mission: 'Drive revenue growth and operational efficiency for SMB sales teams through intelligent orchestration and automation.',
        keyInitiatives: [
          { name: 'Pipeline optimization workflows', status: 'In Progress', owner: 'Jane Smith', targetDate: '2026-08-15' },
          { name: 'Deal acceleration automation', status: 'Planning', owner: 'John Doe', targetDate: '2026-09-30' },
          { name: 'Revenue forecasting intelligence', status: 'In Progress', owner: 'Sarah Johnson', targetDate: '2026-07-31' }
        ],
        impactMetrics: [
          { metric: '23%', label: 'Pipeline Velocity Increase', soWhat: 'Deals moving through stages 23% faster with automated workflows' },
          { metric: '$2.4M', label: 'Additional ARR', soWhat: 'Incremental revenue from improved conversion rates' },
          { metric: '15hrs/week', label: 'Time Saved per Rep', soWhat: 'Reps spending more time selling, less on admin work' }
        ],
        nextSteps: [
          'Complete pilot rollout to 50 SMB reps by end of Q3',
          'Integrate with existing CRM workflows and automation tools',
          'Gather feedback from pilot users and iterate on UI/UX',
          'Prepare business case for full enterprise rollout'
        ]
      },
      {
        id: 'slack-agentforce-for-sales',
        name: 'Slack & Agentforce for Sales',
        slug: 'slack-agentforce-for-sales',
        mission: 'Empower sales teams with AI-powered assistance and collaboration tools directly within Slack workflows.',
        keyInitiatives: [
          { name: 'Agentforce integration with Slack', status: 'In Progress', owner: 'Mike Chen', targetDate: '2026-08-01' },
          { name: 'Sales bot commands and shortcuts', status: 'Completed', owner: 'Emily Rodriguez', targetDate: '2026-06-15' },
          { name: 'Real-time deal alerts and notifications', status: 'In Progress', owner: 'David Park', targetDate: '2026-07-20' }
        ],
        impactMetrics: [
          { metric: '2.5x', label: 'Response Time Improvement', soWhat: 'Sales reps responding to leads 2.5x faster via Slack' },
          { metric: '87%', label: 'User Adoption Rate', soWhat: 'High engagement across pilot sales teams' },
          { metric: '40%', label: 'Reduction in Context Switching', soWhat: 'Less time switching between tools and platforms' }
        ],
        nextSteps: [
          'Expand Agentforce capabilities with custom sales actions',
          'Build out analytics dashboard for Slack engagement metrics',
          'Create training materials and onboarding flow for new users',
          'Explore integration with mobile Slack for on-the-go reps'
        ]
      },
      {
        id: 'sales-content-management',
        name: 'Sales Content Management',
        slug: 'sales-content-management',
        mission: 'Centralize, organize, and intelligently surface the right sales content at the right time to accelerate deals.',
        keyInitiatives: [
          { name: 'Content repository consolidation', status: 'In Progress', owner: 'Lisa Wang', targetDate: '2026-09-15' },
          { name: 'AI-powered content recommendations', status: 'Planning', owner: 'Tom Harris', targetDate: '2026-10-30' },
          { name: 'Usage analytics and reporting', status: 'In Progress', owner: 'Rachel Green', targetDate: '2026-08-30' }
        ],
        impactMetrics: [
          { metric: '65%', label: 'Content Findability', soWhat: 'Reps finding the right content in under 2 minutes' },
          { metric: '3.2x', label: 'Content Reuse Rate', soWhat: 'More reps leveraging proven sales collateral' },
          { metric: '18%', label: 'Win Rate Lift', soWhat: 'Deals with right content close at higher rates' }
        ],
        nextSteps: [
          'Complete content audit and tagging across all repositories',
          'Launch beta version of AI recommendation engine',
          'Train sales teams on new content discovery tools',
          'Establish governance model for content lifecycle'
        ]
      },
      {
        id: 'sales-support-smb-pilot',
        name: 'Sales Support SMB Pilot (RIS)',
        slug: 'sales-support-smb-pilot',
        mission: 'Pilot innovative sales support models and tools specifically designed for high-velocity SMB sales environments.',
        keyInitiatives: [
          { name: 'SMB-specific support workflows', status: 'In Progress', owner: 'Kevin Martinez', targetDate: '2026-07-31' },
          { name: 'Self-service support portal', status: 'Planning', owner: 'Amanda Lee', targetDate: '2026-09-01' },
          { name: 'Automated ticket routing and triage', status: 'Completed', owner: 'Brian Wilson', targetDate: '2026-06-01' }
        ],
        impactMetrics: [
          { metric: '<2hrs', label: 'Average Response Time', soWhat: 'SMB reps getting support faster than ever' },
          { metric: '92%', label: 'First-Contact Resolution', soWhat: 'Most issues resolved without escalation' },
          { metric: '35%', label: 'Support Ticket Reduction', soWhat: 'Fewer interruptions to selling time' }
        ],
        nextSteps: [
          'Expand pilot to additional SMB sales regions',
          'Build out knowledge base with SMB-specific FAQs',
          'Integrate support metrics with sales performance dashboards',
          'Develop playbook for scaling support model enterprise-wide'
        ]
      },
      {
        id: 'sales-support-enhancements',
        name: 'Sales Support Enhancements',
        slug: 'sales-support-enhancements',
        mission: 'Continuously improve sales support capabilities across all segments with tools, training, and process optimization.',
        keyInitiatives: [
          { name: 'Support chatbot with AI triage', status: 'In Progress', owner: 'Nicole Foster', targetDate: '2026-08-15' },
          { name: 'Enhanced ticket tracking system', status: 'In Progress', owner: 'Chris Anderson', targetDate: '2026-07-30' },
          { name: 'Support team training program', status: 'Planning', owner: 'Maria Gonzalez', targetDate: '2026-10-01' }
        ],
        impactMetrics: [
          { metric: '4.7/5', label: 'Support Satisfaction Score', soWhat: 'Sales teams highly satisfied with support quality' },
          { metric: '28%', label: 'Faster Resolution Times', soWhat: 'Issues being resolved quicker with new tools' },
          { metric: '50+', label: 'Automation Rules Deployed', soWhat: 'More support tasks handled automatically' }
        ],
        nextSteps: [
          'Roll out chatbot to all sales segments by Q4',
          'Implement proactive support alerts for common issues',
          'Launch quarterly support training sessions',
          'Create feedback loop between support and product teams'
        ]
      },
      {
        id: 'sales-enablement',
        name: 'Sales Enablement',
        slug: 'sales-enablement',
        mission: 'Equip sales teams with the knowledge, skills, and tools they need to sell effectively and hit their targets.',
        keyInitiatives: [
          { name: 'New hire onboarding program v2.0', status: 'In Progress', owner: 'Jennifer Taylor', targetDate: '2026-08-01' },
          { name: 'Product knowledge certification paths', status: 'Planning', owner: 'Mark Roberts', targetDate: '2026-09-15' },
          { name: 'Sales playbook refresh and digitization', status: 'In Progress', owner: 'Laura Kim', targetDate: '2026-07-15' }
        ],
        impactMetrics: [
          { metric: '30 days', label: 'Time to First Deal', soWhat: 'New reps ramping faster with improved onboarding' },
          { metric: '89%', label: 'Training Completion Rate', soWhat: 'High engagement with enablement programs' },
          { metric: '+12%', label: 'Quota Attainment Lift', soWhat: 'Trained reps performing better than control group' }
        ],
        nextSteps: [
          'Launch updated onboarding program for Q3 new hires',
          'Develop micro-learning modules for ongoing skill development',
          'Integrate enablement metrics with sales performance data',
          'Expand certification programs to include advanced selling skills'
        ]
      }
    ]
  },
  {
    id: 'engagement-agent',
    name: 'Engagement Agent for SDRs & BDRs',
    color: '#5C2D91', // Purple branding
    pods: [
      {
        id: 'engagement-agent-core',
        name: 'Engagement Agent - Core Delivery',
        slug: 'engagement-agent-core',
        mission: 'Build and deliver the core Engagement Agent platform to automate and enhance SDR/BDR outreach workflows.',
        keyInitiatives: [
          { name: 'Core agent infrastructure build', status: 'In Progress', owner: 'Alex Turner', targetDate: '2026-08-30' },
          { name: 'Multi-channel engagement orchestration', status: 'In Progress', owner: 'Priya Patel', targetDate: '2026-09-15' },
          { name: 'AI-powered message personalization', status: 'Planning', owner: 'Daniel Lee', targetDate: '2026-10-01' }
        ],
        impactMetrics: [
          { metric: '3.5x', label: 'Outreach Volume Increase', soWhat: 'SDRs reaching more prospects without sacrificing quality' },
          { metric: '42%', label: 'Reply Rate Improvement', soWhat: 'AI personalization driving higher engagement' },
          { metric: '60hrs/month', label: 'Time Saved per SDR', soWhat: 'Automation handling repetitive tasks' }
        ],
        nextSteps: [
          'Complete alpha build and begin internal testing',
          'Finalize integration with email and LinkedIn platforms',
          'Develop training curriculum for SDR teams',
          'Prepare beta rollout plan for Q4'
        ]
      },
      {
        id: 'engagement-agent-operate',
        name: 'Engagement Agent - Operate & Improve',
        slug: 'engagement-agent-operate',
        mission: 'Ensure operational excellence and continuous improvement of the Engagement Agent platform post-launch.',
        keyInitiatives: [
          { name: 'Performance monitoring dashboard', status: 'Planning', owner: 'Samantha Brown', targetDate: '2026-09-30' },
          { name: 'A/B testing framework for messaging', status: 'Planning', owner: 'Robert Chang', targetDate: '2026-10-15' },
          { name: 'User feedback collection and iteration', status: 'In Progress', owner: 'Emma Davis', targetDate: '2026-08-15' }
        ],
        impactMetrics: [
          { metric: '99.2%', label: 'Platform Uptime', soWhat: 'Reliable service with minimal disruptions' },
          { metric: '15%', label: 'Quarter-over-Quarter Performance Gain', soWhat: 'Continuous optimization driving better results' },
          { metric: '4.5/5', label: 'User Satisfaction Score', soWhat: 'SDRs highly satisfied with platform experience' }
        ],
        nextSteps: [
          'Establish SLA and support model for post-launch operations',
          'Build out experimentation framework for message optimization',
          'Create monthly reporting cadence for stakeholders',
          'Set up feedback loops with SDR leadership teams'
        ]
      },
      {
        id: 'agentic-bdr',
        name: 'Agentic BDR',
        slug: 'agentic-bdr',
        mission: 'Develop autonomous BDR capabilities that handle lead qualification, research, and initial outreach with minimal human intervention.',
        keyInitiatives: [
          { name: 'Autonomous lead scoring and prioritization', status: 'In Progress', owner: 'Jason Wu', targetDate: '2026-09-01' },
          { name: 'Automated company and contact research', status: 'Planning', owner: 'Michelle Garcia', targetDate: '2026-10-30' },
          { name: 'Self-service meeting scheduler integration', status: 'In Progress', owner: 'Tyler Scott', targetDate: '2026-08-20' }
        ],
        impactMetrics: [
          { metric: '5x', label: 'Lead Coverage Expansion', soWhat: 'Agentic BDR covering 5x more leads than human BDRs' },
          { metric: '73%', label: 'Qualification Accuracy', soWhat: 'AI matching human-level qualification quality' },
          { metric: '24/7', label: 'Always-On Engagement', soWhat: 'Leads engaged immediately, any time of day' }
        ],
        nextSteps: [
          'Complete initial machine learning model training',
          'Pilot with controlled set of inbound leads',
          'Measure performance against human BDR benchmarks',
          'Iterate on lead scoring algorithm based on conversion data'
        ]
      },
      {
        id: 'qualified-for-aes',
        name: 'Qualified for AEs',
        slug: 'qualified-for-aes',
        mission: 'Enhance the handoff experience from SDRs/BDRs to AEs by ensuring leads are fully qualified and contextualized.',
        keyInitiatives: [
          { name: 'Qualification criteria standardization', status: 'Completed', owner: 'Hannah Moore', targetDate: '2026-06-01' },
          { name: 'Lead intelligence package automation', status: 'In Progress', owner: 'Eric Thompson', targetDate: '2026-08-10' },
          { name: 'AE feedback loop integration', status: 'Planning', owner: 'Olivia Martinez', targetDate: '2026-09-20' }
        ],
        impactMetrics: [
          { metric: '91%', label: 'AE Acceptance Rate', soWhat: 'AEs accepting and working most leads passed to them' },
          { metric: '22%', label: 'Conversion Rate Improvement', soWhat: 'Better qualified leads closing at higher rates' },
          { metric: '3 days', label: 'Faster Time to First Call', soWhat: 'AEs engaging qualified leads more quickly' }
        ],
        nextSteps: [
          'Roll out standardized lead package template to all teams',
          'Build real-time qualification dashboard for managers',
          'Launch monthly calibration sessions between SDRs and AEs',
          'Implement closed-loop feedback system for lead quality'
        ]
      }
    ]
  }
];

// Helper function to get all pods across all groups
export const getAllPods = () => {
  return groups.flatMap(group =>
    group.pods.map(pod => ({ ...pod, groupId: group.id, groupName: group.name, groupColor: group.color }))
  );
};

// Helper function to get pod by slug
export const getPodBySlug = (slug) => {
  for (const group of groups) {
    const pod = group.pods.find(p => p.slug === slug);
    if (pod) {
      return { ...pod, groupId: group.id, groupName: group.name, groupColor: group.color };
    }
  }
  return null;
};

// Helper function to get group by ID
export const getGroupById = (id) => {
  return groups.find(group => group.id === id);
};

// Status configuration for initiative badges
export const statusConfig = {
  'Completed': {
    color: '#027E46',
    backgroundColor: '#D4EDDA'
  },
  'In Progress': {
    color: '#0176D3',
    backgroundColor: '#D4E7F7'
  },
  'Planning': {
    color: '#706E6B',
    backgroundColor: '#F3F2F2'
  },
  'At Risk': {
    color: '#C23934',
    backgroundColor: '#FED8D7'
  }
};
