import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPodById } from '../data/pods';
import { getPodDetails } from '../data/podDetails';
import SectionHeader from '../components/SectionHeader';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import PodMetricCard from '../components/PodMetricCard';
import ProjectCard from '../components/ProjectCard';
import RoadmapPhase from '../components/RoadmapPhase';
import FAQItem from '../components/FAQItem';
import PodCard from '../components/PodCard';
import './PodDetail.css';

function PodDetail() {
  const { podId } = useParams();
  const navigate = useNavigate();
  const pod = getPodById(podId);
  const details = getPodDetails(podId);

  if (!pod || !details) {
    return (
      <div className="pod-detail">
        <SectionHeader title="Pod Not Found" />
        <Card>
          <p>The pod you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>Back to Dashboard</Button>
        </Card>
      </div>
    );
  }

  const isCritical = pod.status === 'critical';
  const relatedPods = details.relatedPods
    ? details.relatedPods.map(id => getPodById(id)).filter(Boolean)
    : [];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="pod-detail">
      {/* Back Button */}
      <div className="pod-detail-header">
        <Button variant="ghost" size="small" onClick={() => navigate('/')}>
          ← Back to Dashboard
        </Button>
      </div>

      {/* Hero Section */}
      <div className={`pod-detail-hero ${isCritical ? 'pod-detail-hero-critical' : ''}`}>
        <div className="pod-detail-hero-content">
          <div className="pod-detail-title-section">
            <div
              className="pod-detail-color-bar"
              style={{ backgroundColor: pod.color }}
            />
            <div className="pod-detail-title-content">
              <div className="pod-detail-title-row">
                <h1 className="pod-detail-title">{pod.name}</h1>
                {isCritical && <span className="critical-badge">★ Critical Initiative</span>}
              </div>
              <div className="pod-detail-meta-row">
                <Badge status={pod.status} />
                <span className="pod-detail-meta-separator">•</span>
                <span className="pod-detail-meta-text">{pod.shortName}</span>
                <span className="pod-detail-meta-separator">•</span>
                <span className="pod-detail-meta-text">Owner: {pod.owner}</span>
                <span className="pod-detail-meta-separator">•</span>
                <span className="pod-detail-meta-text">Priority: P{pod.priority}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="pod-detail-section">
        <Card className="mission-card">
          <h2 className="section-heading">Mission</h2>
          <p className="mission-text">{details.mission}</p>
        </Card>
      </section>

      {/* Business Value */}
      <section className="pod-detail-section">
        <SectionHeader title="Business Value" subtitle="Why this matters" />
        <Card>
          <div className="business-value-primary">
            <span className="value-icon">💡</span>
            <p className="value-primary-text">{details.businessValue.primary}</p>
          </div>
          <ul className="business-value-list">
            {details.businessValue.secondary.map((value, index) => (
              <li key={index} className="business-value-item">
                {value}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Key Metrics */}
      <section className="pod-detail-section">
        <SectionHeader title="Key Metrics" subtitle="Current performance" />
        <div className="pod-metrics-grid">
          {details.metrics.map((metric, index) => (
            <PodMetricCard key={index} metric={metric} />
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="pod-detail-section">
        <SectionHeader title="Roadmap" subtitle="Development timeline and milestones" />
        <div className="roadmap-phases-list">
          {details.roadmap.map((phase, index) => (
            <RoadmapPhase key={index} phase={phase} />
          ))}
        </div>
      </section>

      {/* Active Projects */}
      {details.activeProjects && details.activeProjects.length > 0 && (
        <section className="pod-detail-section">
          <SectionHeader title="Active Projects" subtitle="Current work in progress" />
          <div className="projects-grid">
            {details.activeProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Architecture */}
      <section className="pod-detail-section">
        <SectionHeader title="Architecture" subtitle="Technical overview" />
        <Card>
          <p className="architecture-description">{details.architecture.description}</p>

          <div className="architecture-section">
            <h3 className="architecture-subtitle">Core Components</h3>
            <div className="architecture-tags">
              {details.architecture.components.map((component, index) => (
                <span key={index} className="architecture-tag">{component}</span>
              ))}
            </div>
          </div>

          <div className="architecture-section">
            <h3 className="architecture-subtitle">Integrations</h3>
            <div className="architecture-tags">
              {details.architecture.integrations.map((integration, index) => (
                <span key={index} className="architecture-tag integration-tag">{integration}</span>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* Two Column: Docs + Slack */}
      <div className="two-column-layout">
        {/* Related Docs */}
        <section className="pod-detail-section">
          <SectionHeader title="Related Documents" />
          <Card>
            {details.relatedDocs.length > 0 ? (
              <div className="docs-list">
                {details.relatedDocs.map((doc, index) => (
                  <div key={index} className="doc-item">
                    <div className="doc-icon">
                      {doc.type === 'presentation' ? '📊' : '📄'}
                    </div>
                    <div className="doc-content">
                      <div className="doc-title">{doc.title}</div>
                      <div className="doc-meta">Updated {formatDate(doc.updated)}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="placeholder-text">No documents yet</p>
            )}
            <div className="docs-placeholder">
              <span className="placeholder-badge-small">Coming Soon</span>
              <span className="placeholder-text-small">Google Drive integration</span>
            </div>
          </Card>
        </section>

        {/* Slack Channels */}
        <section className="pod-detail-section">
          <SectionHeader title="Slack Channels" />
          <Card>
            {details.slackChannels.length > 0 ? (
              <div className="slack-list">
                {details.slackChannels.map((channel, index) => (
                  <div key={index} className="slack-item">
                    <div className="slack-icon">#</div>
                    <div className="slack-content">
                      <div className="slack-name">{channel.name}</div>
                      <div className="slack-description">{channel.description}</div>
                      <div className="slack-members">{channel.memberCount} members</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="placeholder-text">No channels yet</p>
            )}
            <div className="docs-placeholder">
              <span className="placeholder-badge-small">Coming Soon</span>
              <span className="placeholder-text-small">Slack integration</span>
            </div>
          </Card>
        </section>
      </div>

      {/* Demos */}
      {details.demos && details.demos.length > 0 && (
        <section className="pod-detail-section">
          <SectionHeader title="Recent Demos" />
          <Card>
            <div className="demos-list">
              {details.demos.map((demo, index) => (
                <div key={index} className="demo-item">
                  <div className="demo-icon">🎥</div>
                  <div className="demo-content">
                    <div className="demo-title">{demo.title}</div>
                    <div className="demo-meta">
                      {formatDate(demo.date)} • {demo.audience}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>
      )}

      {/* FAQ */}
      {details.faqs && details.faqs.length > 0 && (
        <section className="pod-detail-section">
          <SectionHeader title="Frequently Asked Questions" />
          <Card>
            <div className="faq-list">
              {details.faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </Card>
        </section>
      )}

      {/* Related Pods */}
      {relatedPods.length > 0 && (
        <section className="pod-detail-section">
          <SectionHeader title="Related Pods" subtitle="Connected initiatives" />
          <div className="related-pods-grid">
            {relatedPods.map(relatedPod => (
              <PodCard key={relatedPod.id} pod={relatedPod} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default PodDetail;
