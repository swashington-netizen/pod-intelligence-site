import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import PodCard from '../components/PodCard';
import MetricCard from '../components/MetricCard';
import { pods, getFeaturedPod } from '../data/pods';
import {
  portfolioStrategy,
  businessOutcomes,
  executivePriorities,
  risRationale,
  strategicMilestones
} from '../data/mockData';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const featuredPod = getFeaturedPod();
  const supportingPods = pods.filter(pod => pod.id !== featuredPod?.id);

  return (
    <div className="dashboard">
      {/* Executive Summary - What & Why */}
      <section className="executive-summary">
        <div className="summary-header">
          <h1 className="portfolio-title">Agentic Sales Productivity</h1>
          <div className="portfolio-tagline">AI-Powered Revenue Acceleration for SMB Sales</div>
        </div>

        <div className="mission-statement">
          <h2 className="mission-label">Portfolio Mission</h2>
          <p className="mission-text">{portfolioStrategy.mission}</p>
        </div>

        <div className="why-now-section">
          <h3 className="subsection-title">Why This Portfolio Exists</h3>
          <p className="why-now-text">{portfolioStrategy.whyNow}</p>
        </div>
      </section>

      {/* Business Outcomes - What We're Delivering */}
      <section className="dashboard-section">
        <SectionHeader
          title="Business Outcomes"
          subtitle="Projected revenue and productivity impact across SMB segment"
        />
        <div className="metrics-grid">
          {businessOutcomes.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>
      </section>

      {/* Current Executive Priorities */}
      <section className="dashboard-section">
        <SectionHeader
          title="Current Executive Priorities"
          subtitle="Q3 2026 strategic focus areas"
        />
        <div className="priorities-list">
          {executivePriorities.map((priority) => (
            <Card key={priority.id} className="priority-card">
              <div className="priority-header">
                <h3 className="priority-title">{priority.priority}</h3>
                <span className={`priority-status status-${priority.status}`}>
                  {priority.status === 'on-track' ? 'On Track' : 'In Progress'}
                </span>
              </div>
              <div className="priority-rationale">
                <strong>Rationale:</strong> {priority.rationale}
              </div>
              <div className="priority-meta">
                <span className="priority-owner"><strong>Owner:</strong> {priority.owner}</span>
                <span className="priority-timeline"><strong>Timeline:</strong> {priority.timeline}</span>
                {priority.blockers !== 'None' && (
                  <span className="priority-blockers"><strong>Blockers:</strong> {priority.blockers}</span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Strategic Priority: RIS */}
      {featuredPod && (
        <section className="dashboard-section strategic-priority-section">
          <div className="strategic-priority-header">
            <div>
              <SectionHeader
                title="Strategic Priority: SMB Revenue Orchestration"
                subtitle="Why RIS is our current investment focus"
              />
            </div>
            <Button
              variant="primary"
              onClick={() => navigate(`/pod/${featuredPod.id}`)}
            >
              View Full Details →
            </Button>
          </div>

          <div className="ris-rationale-section">
            <Card className="rationale-card">
              <h3 className="rationale-title">{risRationale.title}</h3>
              <div className="rationale-reasons">
                {risRationale.reasons.map((reason, index) => (
                  <div key={index} className="rationale-item">
                    <div className="rationale-point">{reason.point}</div>
                    <div className="rationale-detail">{reason.detail}</div>
                  </div>
                ))}
              </div>
            </Card>

            <PodCard pod={featuredPod} featured={true} />
          </div>
        </section>
      )}

      {/* Strategic Roadmap */}
      <section className="dashboard-section">
        <SectionHeader
          title="Strategic Roadmap"
          subtitle="Key milestones and business impact"
        />
        <div className="strategic-timeline">
          {strategicMilestones.map((milestone) => (
            <Card key={milestone.id} className="milestone-card">
              <div className="milestone-quarter">{milestone.quarter}</div>
              <h3 className="milestone-title">{milestone.milestone}</h3>
              <div className="milestone-impact">
                <strong>Business Impact:</strong> {milestone.impact}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio Architecture - How Pods Work Together */}
      <section className="dashboard-section">
        <SectionHeader
          title="Portfolio Architecture"
          subtitle="How RIS anchors the ecosystem with supporting capabilities"
        />
        <Card className="architecture-narrative-card">
          <div className="architecture-explanation">
            <div className="arch-section">
              <h3 className="arch-title">Core Platform</h3>
              <div className="arch-pod-badge ris-badge">RIS</div>
              <p className="arch-description">
                Revenue orchestration engine that coordinates AI-powered workflows,
                deal acceleration, and forecasting across the SMB segment.
              </p>
            </div>

            <div className="arch-divider">↓ Provides orchestration layer for</div>

            <div className="arch-section">
              <h3 className="arch-title">Supporting Capabilities</h3>
              <div className="supporting-pods-grid">
                {supportingPods.slice(0, 3).map(pod => (
                  <div key={pod.id} className="arch-supporting-pod">
                    <div className="arch-pod-badge">{pod.shortName}</div>
                    <div className="arch-pod-name">{pod.name}</div>
                  </div>
                ))}
              </div>
              <p className="arch-description">
                Workflow automation, predictive analytics, and operational tools
                that integrate with RIS to deliver end-to-end productivity gains.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* All Portfolio Pods */}
      <section className="dashboard-section">
        <SectionHeader
          title="Full Portfolio"
          subtitle="Six pods addressing SMB sales productivity holistically"
        />
        <div className="pods-grid">
          {pods.map(pod => (
            <PodCard key={pod.id} pod={pod} featured={pod.id === featuredPod?.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
