/**
 * Sales Enablement Pod - Complete Representative Data
 *
 * This pod demonstrates the full executive-ready structure:
 * - Business outcomes (prominent, outcome-focused)
 * - Cross-functional team with avatars
 * - Data source attribution (future Slack/Drive integrations)
 * - Recent updates feed
 * - Complete metrics, initiatives, roadmap
 * - Professional, realistic content
 */

export const salesEnablementData = {
  // Basic Info
  id: 'sales-enablement',
  displayName: 'Sales Enablement',
  shortName: 'Enablement',
  status: 'In Progress',
  priority: 'P1',
  color: '#0B7B7B',

  // Executive Summary
  executiveSummary: 'Equip sales teams with AI-powered just-in-time learning, certifications, and playbooks that improve quota attainment by 12% and reduce ramp time by 40%.',

  // Business Outcomes (First section - answers "Why does this matter?")
  businessOutcomes: {
    highlight: 'Transform sales enablement from quarterly training events to continuous, AI-powered just-in-time learning that drives measurable performance lift',
    outcomes: [
      'Reduce new hire ramp time from 90 days to 54 days (40% improvement)',
      'Increase quota attainment by 12% for trained reps vs control group',
      'Achieve 89% training completion rate (up from 62% baseline)',
      'Enable just-in-time agentic learning - right content at the right moment',
      'Scale enablement to 2,000+ reps without proportional headcount increase'
    ]
  },

  // Cross-Functional Team
  team: [
    { name: 'Katherine Stevens', role: 'Business Sponsor' },
    { name: 'Jennifer Taylor', role: 'Product Manager' },
    { name: 'Mark Roberts', role: 'Single Threaded Owner' },
    { name: 'Laura Kim', role: 'DET Lead' },
    { name: 'Daniel Morrison', role: 'Engineering Manager' },
    { name: 'Samantha Brooks', role: 'Senior Software Engineer' },
    { name: 'Ryan Cooper', role: 'Software Engineer' },
    { name: 'Michelle Zhang', role: 'Software Engineer' },
    { name: 'Olivia Chen', role: 'UX Designer' },
    { name: 'Patrick O\'Brien', role: 'Learning Architect' },
    { name: 'Natalie Foster', role: 'Content Strategist' }
  ],

  // Data Sources (Demonstrates future integrations)
  dataSources: {
    metrics: {
      source: 'Salesforce Analytics',
      lastUpdated: '3 hours ago',
      futureSource: 'Real-time sync from Learning Management System'
    },
    roadmap: {
      source: 'Product Roadmap',
      lastUpdated: 'June 26, 2026',
      futureSource: 'Automated from Jira/Linear'
    },
    updates: {
      source: 'Slack Canvas',
      lastUpdated: 'Today',
      futureSource: 'Live feed from #enablement-updates channel'
    },
    documentation: {
      source: 'Google Drive',
      lastUpdated: 'June 25, 2026',
      futureSource: 'Synced from shared drive folder'
    },
    team: {
      source: 'Manual Entry',
      lastUpdated: 'June 20, 2026',
      futureSource: 'HR system integration or manual config'
    }
  },

  // Recent Updates (Simulates Slack Canvas feed)
  recentUpdates: [
    {
      date: '2026-06-29',
      time: '9:15 AM',
      author: 'Jennifer Taylor',
      type: 'launch',
      content: 'New Hire Onboarding v2.0 launched to Q3 cohort (78 reps). Early feedback: 4.8/5 rating, "best onboarding experience ever."',
      source: 'Slack Canvas',
      icon: '🚀'
    },
    {
      date: '2026-06-28',
      time: '2:30 PM',
      author: 'Mark Roberts',
      type: 'milestone',
      content: 'Certification paths reached 89% completion rate - highest in company history. Quota attainment for certified reps: +12% vs baseline.',
      source: 'Slack Channel',
      icon: '🎯'
    },
    {
      date: '2026-06-27',
      time: '11:45 AM',
      author: 'Laura Kim',
      type: 'metric',
      content: 'Time-to-first-deal dropped to 30 days for Q2 hires (down from 90-day baseline). AI-powered learning paths working.',
      source: 'Slack Canvas',
      icon: '📊'
    },
    {
      date: '2026-06-25',
      time: '4:00 PM',
      author: 'Patrick O\'Brien',
      type: 'feature',
      content: 'Just-in-time learning assistant integrated with Slack. Reps can now ask @EnablementBot for instant playbook access during live calls.',
      source: 'Slack Canvas',
      icon: '✨'
    }
  ],

  // Mission
  mission: 'Equip sales teams with the knowledge, skills, and tools they need to sell effectively through AI-powered just-in-time learning, structured certification paths, and continuously updated digital playbooks.',

  // Key Initiatives (Rich context)
  keyInitiatives: [
    {
      name: 'New Hire Onboarding v2.0',
      status: 'In Progress',
      owner: 'Jennifer Taylor',
      targetDate: 'August 1, 2026',
      progress: 85,
      description: 'Redesigned onboarding program with AI-personalized learning paths, interactive simulations, and peer mentorship matching.',
      nextMilestone: 'Complete Q3 cohort rollout (78 reps) by July 15',
      dependencies: ['Content migration', 'LMS integration', 'Manager training'],
      risks: ['None - on track'],
      outcomes: 'Reduce ramp time from 90 to 54 days'
    },
    {
      name: 'Product Knowledge Certification Paths',
      status: 'Active',
      owner: 'Mark Roberts',
      targetDate: 'September 15, 2026',
      progress: 70,
      description: 'Structured certification program covering all product lines with assessments, badges, and ongoing recertification.',
      nextMilestone: 'Launch Enterprise Cloud certification track by August 1',
      dependencies: ['SME content review', 'Assessment platform'],
      risks: ['Content review delay - mitigation: dedicated SME time'],
      outcomes: 'Increase quota attainment by 12% for certified reps'
    },
    {
      name: 'Sales Playbook Digitization & AI Assistant',
      status: 'In Progress',
      owner: 'Laura Kim',
      targetDate: 'July 15, 2026',
      progress: 90,
      description: 'Convert static playbooks to interactive digital format with AI-powered assistant for just-in-time access during calls.',
      nextMilestone: 'Launch Slack bot integration by July 5',
      dependencies: ['Content conversion', 'Slack app approval'],
      risks: ['Minimal - final testing only'],
      outcomes: 'Enable just-in-time learning at moment of need'
    },
    {
      name: 'Continuous Learning Platform',
      status: 'Planning',
      owner: 'Patrick O\'Brien',
      targetDate: 'October 31, 2026',
      progress: 25,
      description: 'Micro-learning modules delivered via Slack and mobile for ongoing skill development beyond initial onboarding.',
      nextMilestone: 'Complete platform requirements by July 31',
      dependencies: ['Platform selection', 'Content strategy', 'Pilot plan'],
      risks: ['Platform selection in progress'],
      outcomes: 'Maintain skills with weekly micro-learning'
    }
  ],

  // Impact Metrics (With sources and context)
  impactMetrics: [
    {
      label: 'Time to First Deal',
      value: '30 days',
      context: 'New reps closing their first deal in 30 days vs 90-day baseline',
      trend: 'up',
      change: '67% faster',
      source: 'Salesforce Analytics',
      sourceType: 'Salesforce Analytics',
      lastUpdated: '2 hours ago',
      icon: '⚡'
    },
    {
      label: 'Training Completion',
      value: '89%',
      context: 'Reps completing certification paths vs 62% baseline',
      trend: 'up',
      change: '+27 pts',
      source: 'Learning Management System',
      sourceType: 'Future API',
      lastUpdated: 'Today',
      icon: '📚'
    },
    {
      label: 'Quota Attainment Lift',
      value: '+12%',
      context: 'Certified reps outperforming control group by 12 percentage points',
      trend: 'up',
      change: 'vs control',
      source: 'Sales Ops Report',
      sourceType: 'Manual Entry',
      lastUpdated: 'June 27',
      icon: '🎯'
    },
    {
      label: 'Enablement NPS',
      value: '78',
      context: 'Rep satisfaction with enablement programs (best-in-class)',
      trend: 'up',
      change: '+15 pts',
      source: 'Rep Survey Q2 2026',
      sourceType: 'Google Drive',
      lastUpdated: 'June 25',
      icon: '⭐'
    },
    {
      label: 'Playbook Access',
      value: '2,400/week',
      context: 'Weekly playbook accesses via AI assistant - high engagement',
      trend: 'up',
      change: '+180%',
      source: 'Usage Analytics',
      sourceType: 'Slack Analytics',
      lastUpdated: '1 hour ago',
      icon: '📖'
    },
    {
      label: 'Reps Trained',
      value: '847',
      context: 'Reps who completed new onboarding program in 2026',
      trend: 'stable',
      change: 'YTD',
      source: 'LMS Data',
      sourceType: 'Future API',
      lastUpdated: 'Today',
      icon: '👥'
    }
  ],

  // Roadmap (Business milestones with outcomes)
  roadmap: [
    {
      phase: 'Phase 1: Foundation',
      quarter: 'Q1-Q2 2026',
      status: 'Completed',
      description: 'Redesign core onboarding and launch certification framework',
      milestones: [
        'Onboarding v2.0 design and pilot',
        'Product certification paths (3 tracks)',
        'Digital playbook platform'
      ],
      outcomes: 'Reduced ramp time to 54 days, 89% certification completion',
      completionDate: 'June 15, 2026'
    },
    {
      phase: 'Phase 2: Scale & Intelligence',
      quarter: 'Q3 2026',
      status: 'Active',
      description: 'AI-powered just-in-time learning and scaled deployment',
      milestones: [
        'AI assistant launch (Slack bot)',
        'Roll out to all Q3 new hires (150+ reps)',
        'Expand certifications (6 total tracks)',
        'Mobile learning pilot'
      ],
      outcomes: 'Enable just-in-time learning, scale to 2,000+ reps',
      targetDate: 'September 30, 2026'
    },
    {
      phase: 'Phase 3: Continuous Learning',
      quarter: 'Q4 2026',
      status: 'Planning',
      description: 'Ongoing micro-learning and advanced analytics',
      milestones: [
        'Continuous learning platform launch',
        'Advanced analytics dashboard',
        'Peer learning community',
        'Predictive performance insights'
      ],
      outcomes: 'Shift from event-based to continuous learning model',
      targetDate: 'December 31, 2026'
    }
  ],

  // Architecture
  architecture: {
    overview: 'Cloud-native learning platform with AI-powered content recommendations, Slack integration, and seamless LMS connectivity',
    description: 'Microservices architecture integrating with Salesforce, Slack, and Learning Management System. AI recommendation engine surfaces relevant content based on rep role, deal stage, and performance data.',
    components: [
      'Learning Management System (LMS)',
      'AI Recommendation Engine',
      'Content Management Platform',
      'Slack Bot (EnablementBot)',
      'Analytics Pipeline',
      'Mobile App (React Native)'
    ],
    integrations: [
      'Salesforce (rep performance data)',
      'Slack (just-in-time delivery)',
      'Google Drive (content repository)',
      'LMS (completion tracking)',
      'Zoom (virtual training)'
    ],
    techStack: [
      'Python (AI/ML)',
      'React (web platform)',
      'React Native (mobile)',
      'Node.js (Slack bot)',
      'PostgreSQL (data)',
      'TensorFlow (recommendations)'
    ]
  },

  // Resources (With source types)
  resources: [
    {
      title: 'Sales Enablement Strategy FY26-27',
      type: 'Google Drive',
      url: '#',
      updated: 'June 25, 2026',
      description: 'Vision, goals, and strategic roadmap'
    },
    {
      title: 'Onboarding v2.0 Curriculum',
      type: 'Google Drive',
      url: '#',
      updated: 'June 20, 2026',
      description: 'Complete learning path and materials'
    },
    {
      title: 'Certification Path Requirements',
      type: 'Google Drive',
      url: '#',
      updated: 'June 18, 2026',
      description: 'All 6 certification tracks with assessments'
    },
    {
      title: 'Technical Architecture',
      type: 'Architecture Repo',
      url: '#',
      updated: 'June 15, 2026',
      description: 'System design and integrations'
    },
    {
      title: 'Q2 Impact Analysis',
      type: 'Google Drive',
      url: '#',
      updated: 'June 28, 2026',
      description: 'Business outcomes and ROI metrics'
    },
    {
      title: 'AI Assistant User Guide',
      type: 'Google Drive',
      url: '#',
      updated: 'June 26, 2026',
      description: 'How to use EnablementBot in Slack'
    }
  ],

  // Slack Channels
  slackChannels: [
    {
      name: '#enablement-general',
      description: 'Program updates and announcements',
      members: 156,
      url: '#'
    },
    {
      name: '#enablement-new-hires',
      description: 'Onboarding support and cohort community',
      members: 89,
      url: '#'
    },
    {
      name: '#enablement-feedback',
      description: 'Rep feedback and improvement ideas',
      members: 234,
      url: '#'
    },
    {
      name: '#enablement-eng',
      description: 'Engineering team coordination',
      members: 12,
      url: '#'
    }
  ],

  // FAQs
  faqs: [
    {
      question: 'How long does the new onboarding program take?',
      answer: 'Onboarding v2.0 is a 6-week program combining self-paced learning, live sessions, and peer mentorship. New reps complete their first deal in an average of 30 days, down from our previous 90-day baseline.'
    },
    {
      question: 'Are certifications required or optional?',
      answer: 'Product certifications are optional but strongly encouraged. Data shows certified reps have 12% higher quota attainment. Many teams are making certifications a requirement for certain deal types.'
    },
    {
      question: 'How does the AI assistant work?',
      answer: 'EnablementBot lives in Slack and provides instant access to playbooks, best practices, and product information. Just ask a question like "@EnablementBot how do I handle security objections?" and get a curated response with links to relevant resources.'
    },
    {
      question: 'Can I access training materials on my phone?',
      answer: 'Yes! All content is mobile-optimized. We\'re piloting a dedicated mobile app in Q3 2026 with offline access and push notifications for recommended micro-learning.'
    },
    {
      question: 'How often is training content updated?',
      answer: 'Playbooks and certification content are reviewed quarterly and updated as needed. Product-specific content is updated within 48 hours of product releases. AI-recommended content is continuously refined based on effectiveness data.'
    },
    {
      question: 'What happens after I complete onboarding?',
      answer: 'Ongoing development continues with certification paths, weekly micro-learning (launching Q4), peer learning communities, and advanced skills workshops. Enablement is continuous, not a one-time event.'
    }
  ],

  // Related Pods
  relatedPods: [
    { id: 'smb-revenue-orchestration', name: 'SMB Revenue Orchestration', relationship: 'Provides performance data for targeted learning' },
    { id: 'slack-agentforce-for-sales', name: 'Slack & Agentforce', relationship: 'Shared Slack integration platform' }
  ]
};

// Export for use in application
export default salesEnablementData;
