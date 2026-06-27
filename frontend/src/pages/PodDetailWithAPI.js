/**
 * PodDetail Component (API Version)
 *
 * Displays complete pod information fetched from the API.
 * Includes FeedbackForm for user feedback.
 */

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePodData } from '../hooks/usePodData';
import FeedbackForm from '../components/FeedbackForm';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';
import './PodDetail.css';

function PodDetailWithAPI() {
  const { podId } = useParams();
  const navigate = useNavigate();
  const { data: pod, loading, error } = usePodData(podId);

  // Loading state
  if (loading) {
    return (
      <div className="pod-detail">
        <div className="pod-detail-header">
          <Button variant="ghost" size="small" onClick={() => navigate('/')}>
            ← Back to Dashboard
          </Button>
        </div>
        <div className="loading-message">Loading pod details...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="pod-detail">
        <div className="pod-detail-header">
          <Button variant="ghost" size="small" onClick={() => navigate('/')}>
            ← Back to Dashboard
          </Button>
        </div>
        <Card>
          <h2>Error Loading Pod</h2>
          <p>{error.message}</p>
          <p>Please check your API connection and try again.</p>
        </Card>
      </div>
    );
  }

  // No pod found
  if (!pod) {
    return (
      <div className="pod-detail">
        <div className="pod-detail-header">
          <Button variant="ghost" size="small" onClick={() => navigate('/')}>
            ← Back to Dashboard
          </Button>
        </div>
        <Card>
          <h2>Pod Not Found</h2>
          <p>The pod you're looking for doesn't exist.</p>
        </Card>
      </div>
    );
  }

  const content = pod.content || {};
  const initiatives = content.initiatives || [];
  const metrics = content.metrics || [];
  const nextSteps = content.nextSteps || [];
  const sources = content.sources || [];

  return (
    <div className="pod-detail">
      {/* Back Button */}
      <div className="pod-detail-header">
        <Button variant="ghost" size="small" onClick={() => navigate('/')}>
          ← Back to Dashboard
        </Button>
      </div>

      {/* Hero Section */}
      <div className="pod-detail-hero">
        <div className="pod-detail-hero-content">
          <h1 className="pod-detail-title">{pod.name}</h1>
          <p className="pod-detail-subtitle">{pod.groupId}</p>
        </div>
      </div>

      {/* Mission */}
      {content.mission && (
        <section className="pod-section">
          <h2 className="section-title">Mission</h2>
          <Card>
            <p className="mission-text">{content.mission}</p>
          </Card>
        </section>
      )}

      {/* Key Initiatives */}
      {initiatives.length > 0 && (
        <section className="pod-section">
          <h2 className="section-title">Key Initiatives</h2>
          <div className="initiatives-grid">
            {initiatives.map((initiative, index) => (
              <Card key={index}>
                <div className="initiative-header">
                  <h3 className="initiative-name">{initiative.name}</h3>
                  <Badge status={initiative.status} />
                </div>
                <div className="initiative-meta">
                  <p><strong>Owner:</strong> {initiative.owner}</p>
                  <p><strong>Target Date:</strong> {initiative.targetDate}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Metrics */}
      {metrics.length > 0 && (
        <section className="pod-section">
          <h2 className="section-title">Impact Metrics</h2>
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <Card key={index} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                <p className="metric-context">{metric.soWhat}</p>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Next Steps */}
      {nextSteps.length > 0 && (
        <section className="pod-section">
          <h2 className="section-title">Next Steps</h2>
          <Card>
            <ul className="next-steps-list">
              {nextSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </Card>
        </section>
      )}

      {/* Sources */}
      {sources.length > 0 && (
        <section className="pod-section">
          <h2 className="section-title">Sources</h2>
          <Card>
            <ul className="sources-list">
              {sources.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </Card>
        </section>
      )}

      {/* Feedback Form */}
      <section className="pod-section">
        <h2 className="section-title">Feedback</h2>
        <FeedbackForm podId={podId} />
      </section>

      {/* Metadata */}
      <section className="pod-section">
        <Card>
          <div className="pod-metadata">
            <p><strong>Pod ID:</strong> {pod.id}</p>
            <p><strong>Group:</strong> {pod.groupId}</p>
            {pod.lastSyncedAt && (
              <p><strong>Last Synced:</strong> {new Date(pod.lastSyncedAt).toLocaleString()}</p>
            )}
            {pod.updatedAt && (
              <p><strong>Last Updated:</strong> {new Date(pod.updatedAt).toLocaleString()}</p>
            )}
            {pod.canvasId && (
              <p><strong>Canvas ID:</strong> {pod.canvasId}</p>
            )}
          </div>
        </Card>
      </section>
    </div>
  );
}

export default PodDetailWithAPI;
