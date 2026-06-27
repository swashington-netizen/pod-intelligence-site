-- Portfolio Intelligence Seed Data
-- Purpose: Initial pod data for development and testing
-- Last Updated: June 26, 2026

-- ============================================================
-- AGENTIC SALES PRODUCTIVITY PORTFOLIO (6 PODS)
-- ============================================================

-- Pod 1: SMB Revenue Orchestration (RIS)
INSERT INTO pods (id, group_id, name, content, updated_at) VALUES (
  'smb-revenue-orchestration',
  'agentic-sales-productivity',
  'SMB Revenue Orchestration (RIS)',
  '{
    "mission": "Drive revenue growth and operational efficiency for SMB sales teams through intelligent orchestration and automation.",
    "initiatives": [
      {
        "name": "Pipeline optimization workflows",
        "status": "On Track",
        "owner": "Jane Smith",
        "targetDate": "2026-08-15"
      },
      {
        "name": "Deal acceleration automation",
        "status": "On Track",
        "owner": "John Doe",
        "targetDate": "2026-09-30"
      },
      {
        "name": "Revenue forecasting intelligence",
        "status": "On Track",
        "owner": "Sarah Johnson",
        "targetDate": "2026-07-31"
      }
    ],
    "metrics": [
      {
        "value": "23%",
        "label": "Pipeline Velocity Increase",
        "soWhat": "Deals moving through stages 23% faster with automated workflows"
      },
      {
        "value": "$2.4M",
        "label": "Additional ARR",
        "soWhat": "Incremental revenue from improved conversion rates"
      },
      {
        "value": "15hrs/week",
        "label": "Time Saved per Rep",
        "soWhat": "Reps spending more time selling, less on admin work"
      }
    ],
    "nextSteps": [
      "Complete pilot rollout to 50 SMB reps by end of Q3",
      "Integrate with existing CRM workflows and automation tools",
      "Gather feedback from pilot users and iterate on UI/UX",
      "Prepare business case for full enterprise rollout"
    ],
    "sources": [
      "FY26 Business Case Model",
      "Q2 2026 Pilot Results (N=50 reps)",
      "Salesforce Analytics Platform"
    ],
    "lastEditedBy": "product-team@salesforce.com",
    "lastEditedAt": "2026-06-26T10:00:00Z"
  }',
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = EXCLUDED.updated_at;

-- Pod 2: Slack & Agentforce for Sales
INSERT INTO pods (id, group_id, name, content, updated_at) VALUES (
  'slack-agentforce-for-sales',
  'agentic-sales-productivity',
  'Slack & Agentforce for Sales',
  '{
    "mission": "Empower sales teams with AI-powered assistance and collaboration tools directly within Slack workflows.",
    "initiatives": [
      {
        "name": "Agentforce integration with Slack",
        "status": "On Track",
        "owner": "Mike Chen",
        "targetDate": "2026-08-01"
      },
      {
        "name": "Sales bot commands and shortcuts",
        "status": "Complete",
        "owner": "Emily Rodriguez",
        "targetDate": "2026-06-15"
      },
      {
        "name": "Real-time deal alerts and notifications",
        "status": "On Track",
        "owner": "David Park",
        "targetDate": "2026-07-20"
      }
    ],
    "metrics": [
      {
        "value": "2.5x",
        "label": "Response Time Improvement",
        "soWhat": "Sales reps responding to leads 2.5x faster via Slack"
      },
      {
        "value": "87%",
        "label": "User Adoption Rate",
        "soWhat": "High engagement across pilot sales teams"
      },
      {
        "value": "40%",
        "label": "Reduction in Context Switching",
        "soWhat": "Less time switching between tools and platforms"
      }
    ],
    "nextSteps": [
      "Expand Agentforce capabilities with custom sales actions",
      "Build out analytics dashboard for Slack engagement metrics",
      "Create training materials and onboarding flow for new users",
      "Explore integration with mobile Slack for on-the-go reps"
    ],
    "sources": [
      "Slack Usage Analytics (Q2 2026)",
      "Sales Rep Survey (N=200)",
      "Pilot Program Report"
    ],
    "lastEditedBy": "product-team@salesforce.com",
    "lastEditedAt": "2026-06-26T10:00:00Z"
  }',
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = EXCLUDED.updated_at;

-- Pod 3: Sales Content Management
INSERT INTO pods (id, group_id, name, content, updated_at) VALUES (
  'sales-content-management',
  'agentic-sales-productivity',
  'Sales Content Management',
  '{
    "mission": "Centralize, organize, and intelligently surface the right sales content at the right time to accelerate deals.",
    "initiatives": [
      {
        "name": "Content repository consolidation",
        "status": "On Track",
        "owner": "Lisa Wang",
        "targetDate": "2026-09-15"
      },
      {
        "name": "AI-powered content recommendations",
        "status": "On Track",
        "owner": "Tom Harris",
        "targetDate": "2026-10-30"
      },
      {
        "name": "Usage analytics and reporting",
        "status": "On Track",
        "owner": "Rachel Green",
        "targetDate": "2026-08-30"
      }
    ],
    "metrics": [
      {
        "value": "65%",
        "label": "Content Findability",
        "soWhat": "Reps finding the right content in under 2 minutes"
      },
      {
        "value": "3.2x",
        "label": "Content Reuse Rate",
        "soWhat": "More reps leveraging proven sales collateral"
      },
      {
        "value": "18%",
        "label": "Win Rate Lift",
        "soWhat": "Deals with right content close at higher rates"
      }
    ],
    "nextSteps": [
      "Complete content audit and tagging across all repositories",
      "Launch beta version of AI recommendation engine",
      "Train sales teams on new content discovery tools",
      "Establish governance model for content lifecycle"
    ],
    "sources": [
      "Content Usage Analytics",
      "Win/Loss Analysis Report (Q1 2026)",
      "Sales Rep Time Study"
    ],
    "lastEditedBy": "product-team@salesforce.com",
    "lastEditedAt": "2026-06-26T10:00:00Z"
  }',
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = EXCLUDED.updated_at;

-- Pod 4: Sales Support SMB Pilot (RIS)
INSERT INTO pods (id, group_id, name, content, updated_at) VALUES (
  'sales-support-smb-pilot',
  'agentic-sales-productivity',
  'Sales Support SMB Pilot (RIS)',
  '{
    "mission": "Pilot innovative sales support models and tools specifically designed for high-velocity SMB sales environments.",
    "initiatives": [
      {
        "name": "SMB-specific support workflows",
        "status": "On Track",
        "owner": "Kevin Martinez",
        "targetDate": "2026-07-31"
      },
      {
        "name": "Self-service support portal",
        "status": "On Track",
        "owner": "Amanda Lee",
        "targetDate": "2026-09-01"
      },
      {
        "name": "Automated ticket routing and triage",
        "status": "Complete",
        "owner": "Brian Wilson",
        "targetDate": "2026-06-01"
      }
    ],
    "metrics": [
      {
        "value": "<2hrs",
        "label": "Average Response Time",
        "soWhat": "SMB reps getting support faster than ever"
      },
      {
        "value": "92%",
        "label": "First-Contact Resolution",
        "soWhat": "Most issues resolved without escalation"
      },
      {
        "value": "35%",
        "label": "Support Ticket Reduction",
        "soWhat": "Fewer interruptions to selling time"
      }
    ],
    "nextSteps": [
      "Expand pilot to additional SMB sales regions",
      "Build out knowledge base with SMB-specific FAQs",
      "Integrate support metrics with sales performance dashboards",
      "Develop playbook for scaling support model enterprise-wide"
    ],
    "sources": [
      "Support Ticket System (Zendesk)",
      "SMB Pilot Feedback Survey",
      "Support Team Metrics Dashboard"
    ],
    "lastEditedBy": "product-team@salesforce.com",
    "lastEditedAt": "2026-06-26T10:00:00Z"
  }',
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = EXCLUDED.updated_at;

-- Pod 5: Sales Support Enhancements
INSERT INTO pods (id, group_id, name, content, updated_at) VALUES (
  'sales-support-enhancements',
  'agentic-sales-productivity',
  'Sales Support Enhancements',
  '{
    "mission": "Continuously improve sales support capabilities across all segments with tools, training, and process optimization.",
    "initiatives": [
      {
        "name": "Support chatbot with AI triage",
        "status": "On Track",
        "owner": "Nicole Foster",
        "targetDate": "2026-08-15"
      },
      {
        "name": "Enhanced ticket tracking system",
        "status": "On Track",
        "owner": "Chris Anderson",
        "targetDate": "2026-07-30"
      },
      {
        "name": "Support team training program",
        "status": "On Track",
        "owner": "Maria Gonzalez",
        "targetDate": "2026-10-01"
      }
    ],
    "metrics": [
      {
        "value": "4.7/5",
        "label": "Support Satisfaction Score",
        "soWhat": "Sales teams highly satisfied with support quality"
      },
      {
        "value": "28%",
        "label": "Faster Resolution Times",
        "soWhat": "Issues being resolved quicker with new tools"
      },
      {
        "value": "50+",
        "label": "Automation Rules Deployed",
        "soWhat": "More support tasks handled automatically"
      }
    ],
    "nextSteps": [
      "Roll out chatbot to all sales segments by Q4",
      "Implement proactive support alerts for common issues",
      "Launch quarterly support training sessions",
      "Create feedback loop between support and product teams"
    ],
    "sources": [
      "Support Satisfaction Surveys",
      "Ticket Resolution Analytics",
      "Automation System Logs"
    ],
    "lastEditedBy": "product-team@salesforce.com",
    "lastEditedAt": "2026-06-26T10:00:00Z"
  }',
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = EXCLUDED.updated_at;

-- Pod 6: Sales Enablement
INSERT INTO pods (id, group_id, name, content, updated_at) VALUES (
  'sales-enablement',
  'agentic-sales-productivity',
  'Sales Enablement',
  '{
    "mission": "Equip sales teams with the knowledge, skills, and tools they need to sell effectively and hit their targets.",
    "initiatives": [
      {
        "name": "New hire onboarding program v2.0",
        "status": "On Track",
        "owner": "Jennifer Taylor",
        "targetDate": "2026-08-01"
      },
      {
        "name": "Product knowledge certification paths",
        "status": "On Track",
        "owner": "Mark Roberts",
        "targetDate": "2026-09-15"
      },
      {
        "name": "Sales playbook refresh and digitization",
        "status": "On Track",
        "owner": "Laura Kim",
        "targetDate": "2026-07-15"
      }
    ],
    "metrics": [
      {
        "value": "30 days",
        "label": "Time to First Deal",
        "soWhat": "New reps ramping faster with improved onboarding"
      },
      {
        "value": "89%",
        "label": "Training Completion Rate",
        "soWhat": "High engagement with enablement programs"
      },
      {
        "value": "+12%",
        "label": "Quota Attainment Lift",
        "soWhat": "Trained reps performing better than control group"
      }
    ],
    "nextSteps": [
      "Launch updated onboarding program for Q3 new hires",
      "Develop micro-learning modules for ongoing skill development",
      "Integrate enablement metrics with sales performance data",
      "Expand certification programs to include advanced selling skills"
    ],
    "sources": [
      "HR Onboarding Analytics",
      "Training Platform Data (Trailhead)",
      "Sales Performance Dashboard"
    ],
    "lastEditedBy": "product-team@salesforce.com",
    "lastEditedAt": "2026-06-26T10:00:00Z"
  }',
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = EXCLUDED.updated_at;

-- ============================================================
-- ENGAGEMENT AGENT FOR SDRS & BDRS PORTFOLIO (4 PODS)
-- ============================================================

-- Pod 7: Engagement Agent - Core Delivery
INSERT INTO pods (id, group_id, name, content, updated_at) VALUES (
  'engagement-agent-core',
  'engagement-agent-sdrs-bdrs',
  'Engagement Agent - Core Delivery',
  '{
    "mission": "Build and deliver the core Engagement Agent platform to automate and enhance SDR/BDR outreach workflows.",
    "initiatives": [
      {
        "name": "Core agent infrastructure build",
        "status": "On Track",
        "owner": "Alex Turner",
        "targetDate": "2026-08-30"
      },
      {
        "name": "Multi-channel engagement orchestration",
        "status": "On Track",
        "owner": "Priya Patel",
        "targetDate": "2026-09-15"
      },
      {
        "name": "AI-powered message personalization",
        "status": "On Track",
        "owner": "Daniel Lee",
        "targetDate": "2026-10-01"
      }
    ],
    "metrics": [
      {
        "value": "3.5x",
        "label": "Outreach Volume Increase",
        "soWhat": "SDRs reaching more prospects without sacrificing quality"
      },
      {
        "value": "42%",
        "label": "Reply Rate Improvement",
        "soWhat": "AI personalization driving higher engagement"
      },
      {
        "value": "60hrs/month",
        "label": "Time Saved per SDR",
        "soWhat": "Automation handling repetitive tasks"
      }
    ],
    "nextSteps": [
      "Complete alpha build and begin internal testing",
      "Finalize integration with email and LinkedIn platforms",
      "Develop training curriculum for SDR teams",
      "Prepare beta rollout plan for Q4"
    ],
    "sources": [
      "Alpha Testing Results",
      "SDR Time Study (Q2 2026)",
      "Engagement Metrics Dashboard"
    ],
    "lastEditedBy": "product-team@salesforce.com",
    "lastEditedAt": "2026-06-26T10:00:00Z"
  }',
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = EXCLUDED.updated_at;

-- Pod 8: Engagement Agent - Operate & Improve
INSERT INTO pods (id, group_id, name, content, updated_at) VALUES (
  'engagement-agent-operate',
  'engagement-agent-sdrs-bdrs',
  'Engagement Agent - Operate & Improve',
  '{
    "mission": "Ensure operational excellence and continuous improvement of the Engagement Agent platform post-launch.",
    "initiatives": [
      {
        "name": "Performance monitoring dashboard",
        "status": "On Track",
        "owner": "Samantha Brown",
        "targetDate": "2026-09-30"
      },
      {
        "name": "A/B testing framework for messaging",
        "status": "On Track",
        "owner": "Robert Chang",
        "targetDate": "2026-10-15"
      },
      {
        "name": "User feedback collection and iteration",
        "status": "On Track",
        "owner": "Emma Davis",
        "targetDate": "2026-08-15"
      }
    ],
    "metrics": [
      {
        "value": "99.2%",
        "label": "Platform Uptime",
        "soWhat": "Reliable service with minimal disruptions"
      },
      {
        "value": "15%",
        "label": "Quarter-over-Quarter Performance Gain",
        "soWhat": "Continuous optimization driving better results"
      },
      {
        "value": "4.5/5",
        "label": "User Satisfaction Score",
        "soWhat": "SDRs highly satisfied with platform experience"
      }
    ],
    "nextSteps": [
      "Establish SLA and support model for post-launch operations",
      "Build out experimentation framework for message optimization",
      "Create monthly reporting cadence for stakeholders",
      "Set up feedback loops with SDR leadership teams"
    ],
    "sources": [
      "Platform Monitoring Tools",
      "User Satisfaction Surveys",
      "A/B Test Results Database"
    ],
    "lastEditedBy": "product-team@salesforce.com",
    "lastEditedAt": "2026-06-26T10:00:00Z"
  }',
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = EXCLUDED.updated_at;

-- Pod 9: Agentic BDR
INSERT INTO pods (id, group_id, name, content, updated_at) VALUES (
  'agentic-bdr',
  'engagement-agent-sdrs-bdrs',
  'Agentic BDR',
  '{
    "mission": "Develop autonomous BDR capabilities that handle lead qualification, research, and initial outreach with minimal human intervention.",
    "initiatives": [
      {
        "name": "Autonomous lead scoring and prioritization",
        "status": "On Track",
        "owner": "Jason Wu",
        "targetDate": "2026-09-01"
      },
      {
        "name": "Automated company and contact research",
        "status": "On Track",
        "owner": "Michelle Garcia",
        "targetDate": "2026-10-30"
      },
      {
        "name": "Self-service meeting scheduler integration",
        "status": "On Track",
        "owner": "Tyler Scott",
        "targetDate": "2026-08-20"
      }
    ],
    "metrics": [
      {
        "value": "5x",
        "label": "Lead Coverage Expansion",
        "soWhat": "Agentic BDR covering 5x more leads than human BDRs"
      },
      {
        "value": "73%",
        "label": "Qualification Accuracy",
        "soWhat": "AI matching human-level qualification quality"
      },
      {
        "value": "24/7",
        "label": "Always-On Engagement",
        "soWhat": "Leads engaged immediately, any time of day"
      }
    ],
    "nextSteps": [
      "Complete initial machine learning model training",
      "Pilot with controlled set of inbound leads",
      "Measure performance against human BDR benchmarks",
      "Iterate on lead scoring algorithm based on conversion data"
    ],
    "sources": [
      "ML Model Performance Metrics",
      "Lead Conversion Analytics",
      "BDR Benchmark Study (Q1 2026)"
    ],
    "lastEditedBy": "product-team@salesforce.com",
    "lastEditedAt": "2026-06-26T10:00:00Z"
  }',
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = EXCLUDED.updated_at;

-- Pod 10: Qualified for AEs
INSERT INTO pods (id, group_id, name, content, updated_at) VALUES (
  'qualified-for-aes',
  'engagement-agent-sdrs-bdrs',
  'Qualified for AEs',
  '{
    "mission": "Enhance the handoff experience from SDRs/BDRs to AEs by ensuring leads are fully qualified and contextualized.",
    "initiatives": [
      {
        "name": "Qualification criteria standardization",
        "status": "Complete",
        "owner": "Hannah Moore",
        "targetDate": "2026-06-01"
      },
      {
        "name": "Lead intelligence package automation",
        "status": "On Track",
        "owner": "Eric Thompson",
        "targetDate": "2026-08-10"
      },
      {
        "name": "AE feedback loop integration",
        "status": "On Track",
        "owner": "Olivia Martinez",
        "targetDate": "2026-09-20"
      }
    ],
    "metrics": [
      {
        "value": "91%",
        "label": "AE Acceptance Rate",
        "soWhat": "AEs accepting and working most leads passed to them"
      },
      {
        "value": "22%",
        "label": "Conversion Rate Improvement",
        "soWhat": "Better qualified leads closing at higher rates"
      },
      {
        "value": "3 days",
        "label": "Faster Time to First Call",
        "soWhat": "AEs engaging qualified leads more quickly"
      }
    ],
    "nextSteps": [
      "Roll out standardized lead package template to all teams",
      "Build real-time qualification dashboard for managers",
      "Launch monthly calibration sessions between SDRs and AEs",
      "Implement closed-loop feedback system for lead quality"
    ],
    "sources": [
      "CRM Handoff Analytics",
      "AE Feedback Surveys",
      "Lead Quality Scorecard"
    ],
    "lastEditedBy": "product-team@salesforce.com",
    "lastEditedAt": "2026-06-26T10:00:00Z"
  }',
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = EXCLUDED.updated_at;

-- ============================================================
-- VERIFICATION QUERY
-- ============================================================
-- Run this to verify all pods were inserted correctly

-- SELECT id, group_id, name, updated_at FROM pods ORDER BY group_id, name;
