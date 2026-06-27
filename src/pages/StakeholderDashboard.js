import React from 'react';
import Card from '../components/Card';
import MetricWithSource from '../components/MetricWithSource';
import FeedbackWidget from '../components/FeedbackWidget';
import { portfolioConfig } from '../data/portfolioConfig';
import './StakeholderDashboard.css';

function StakeholderDashboard() {
  const { portfolio, businessMetrics, strategicPod, supportingPods, roadmap, contact } = portfolioConfig;

  return (
    <div className="stakeholder-dashboard">
      {/* Header - What is this */}
      <section className="portfolio-header">
        <h1 className="portfolio-name">{portfolio.name}</h1>
        <p className="portfolio-headline">{portfolio.headline}</p>
      </section>

      {/* Executive Summary - The Story */}
      <section className="exec-summary-section">
        <Card className="exec-summary-card">
          <div className="summary-grid">
            <div className="summary-item">
              <h3 className="summary-label">The Challenge</h3>
              <p className="summary-text">{portfolio.executiveSummary.problem}</p>
            </div>
            <div className="summary-item">
              <h3 className="summary-label">Our Solution</h3>
              <p className="summary-text">{portfolio.executiveSummary.solution}</p>
            </div>
            <div className="summary-item">
              <h3 className="summary-label">The Opportunity</h3>
              <p className="summary-text">{portfolio.executiveSummary.opportunity}</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Business Impact - Actionable Metrics */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">Business Impact</h2>
          <p className="section-subtitle">What this portfolio delivers for Salesforce</p>
        </div>

        <div className="metrics-grid-business">
          {businessMetrics.map((metric, index) => (
            <MetricWithSource key={index} metric={metric} />
          ))}
        </div>
      </section>

      {/* Strategic Priority Pod */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">{strategicPod.strategicRationale.title}</h2>
          <p className="section-subtitle">Current investment focus</p>
        </div>

        <div className="strategic-pod-layout">
          {/* Rationale */}
          <Card className="rationale-box">
            <h3 className="pod-name-title">{strategicPod.name}</h3>
            <p className="pod-headline">{strategicPod.headline}</p>

            <div className="rationale-list">
              {strategicPod.strategicRationale.reasons.map((reason, index) => (
                <div key={index} className="rationale-reason">
                  <span className="rationale-number">{index + 1}</span>
                  <span className="rationale-text">{reason}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Key Initiatives */}
          <div className="initiatives-column">
            <h4 className="subsection-title">Key Initiatives</h4>
            {strategicPod.keyInitiatives.map((initiative, index) => (
              <Card key={index} className="initiative-card">
                <div className="initiative-header">
                  <h5 className="initiative-name">{initiative.name}</h5>
                  <span className={`initiative-status status-${initiative.status.toLowerCase().replace(' ', '-')}`}>
                    {initiative.status}
                  </span>
                </div>
                <p className="initiative-description">{initiative.description}</p>
                <div className="initiative-meta">
                  <span><strong>Owner:</strong> {initiative.owner}</span>
                  <span><strong>Timeline:</strong> {initiative.timeline}</span>
                </div>
                <div className="next-milestone">
                  <strong>Next Milestone:</strong> {initiative.nextMilestone}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* RIS Impact Metrics */}
        <div className="pod-metrics-section">
          <h4 className="subsection-title">Impact Metrics</h4>
          <div className="pod-metrics-grid">
            {strategicPod.impactMetrics.map((metric, index) => (
              <Card key={index} className="pod-metric-card">
                <div className="pod-metric-value">{metric.value}</div>
                <div className="pod-metric-label">{metric.metric}</div>
                <div className="pod-metric-context">{metric.context}</div>
                <div className="pod-metric-source">Source: {metric.source}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Asks / Next Steps */}
        <Card className="asks-card">
          <h4 className="subsection-title">What We Need from You</h4>
          {strategicPod.asks.map((ask, index) => (
            <div key={index} className="ask-item">
              <div className="ask-title">{ask.ask}</div>
              <div className="ask-rationale"><strong>Why:</strong> {ask.rationale}</div>
              <div className="ask-decision"><strong>Decision Needed:</strong> {ask.decision}</div>
            </div>
          ))}
        </Card>
      </section>

      {/* Supporting Pods */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">Supporting Capabilities</h2>
          <p className="section-subtitle">Additional pods in the portfolio (coming soon)</p>
        </div>

        <div className="supporting-pods-grid">
          {supportingPods.map((pod) => (
            <Card key={pod.id} className="supporting-pod-card">
              <div className="pod-badge">{pod.shortName}</div>
              <h5 className="supporting-pod-name">{pod.name}</h5>
              <p className="supporting-pod-headline">{pod.headline}</p>
              <div className="supporting-pod-meta">
                <span className="pod-status-label">{pod.status}</span>
                <span className="pod-timeline">{pod.timeline}</span>
              </div>
              <div className="business-value-note">
                <strong>Business Value:</strong> {pod.businessValue}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-container">
        <div className="section-header">
          <h2 className="section-title">Strategic Roadmap</h2>
          <p className="section-subtitle">Key milestones ahead</p>
        </div>

        <div className="roadmap-timeline">
          {roadmap.map((milestone, index) => (
            <Card key={index} className="roadmap-milestone-card">
              <div className="milestone-quarter">{milestone.quarter}</div>
              <h4 className="milestone-name">{milestone.milestone}</h4>
              <div className="milestone-goal"><strong>Goal:</strong> {milestone.goal}</div>
              <div className="milestone-success"><strong>Success Metric:</strong> {milestone.success}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Feedback Widget */}
      <section className="section-container feedback-section">
        <FeedbackWidget
          prompt={contact.feedbackPrompt}
          team={contact.team}
        />
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        <p>Questions? Contact: {contact.primaryContact}</p>
      </footer>
    </div>
  );
}

export default StakeholderDashboard;
