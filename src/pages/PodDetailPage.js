import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPodBySlug, statusConfig } from '../data/podsConfig';
import './PodDetailPage.css';

const PodDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const pod = getPodBySlug(slug);
  const [feedback, setFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  if (!pod) {
    return (
      <div className="pod-detail-error">
        <h2>Pod not found</h2>
        <button onClick={() => navigate('/')}>Return to Home</button>
      </div>
    );
  }

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Feedback submitted:', feedback);
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedback('');
      setFeedbackSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pod-detail-page">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb">
        <span onClick={() => navigate('/')} className="breadcrumb-link">Home</span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{pod.groupName}</span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{pod.name}</span>
      </nav>

      {/* Pod Header */}
      <header className="pod-header" style={{ borderLeftColor: pod.groupColor }}>
        <div className="pod-header-content">
          <div className="pod-title-section">
            <h1>{pod.name}</h1>
            <span className="group-badge" style={{ backgroundColor: pod.groupColor }}>
              {pod.groupName}
            </span>
          </div>
        </div>
      </header>

      {/* Pod Mission */}
      <section className="pod-section mission-section">
        <h2 className="section-title">Pod Mission</h2>
        <p className="mission-text">{pod.mission}</p>
      </section>

      {/* Key Initiatives */}
      <section className="pod-section initiatives-section">
        <h2 className="section-title">Key Initiatives</h2>
        <div className="initiatives-table-container">
          <table className="initiatives-table">
            <thead>
              <tr>
                <th>Initiative Name</th>
                <th>Status</th>
                <th>Owner</th>
                <th>Target Date</th>
              </tr>
            </thead>
            <tbody>
              {pod.keyInitiatives.map((initiative, index) => {
                const statusStyle = statusConfig[initiative.status] || statusConfig['Planning'];
                return (
                  <tr key={index}>
                    <td className="initiative-name">{initiative.name}</td>
                    <td>
                      <span
                        className="status-badge"
                        style={{
                          color: statusStyle.color,
                          backgroundColor: statusStyle.backgroundColor
                        }}
                      >
                        {initiative.status}
                      </span>
                    </td>
                    <td>{initiative.owner}</td>
                    <td>{initiative.targetDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="pod-section metrics-section">
        <h2 className="section-title">Impact Metrics</h2>
        <div className="metrics-grid">
          {pod.impactMetrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-value">{metric.metric}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-so-what">
                <span className="so-what-label">So What?</span>
                <p>{metric.soWhat}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps / Asks */}
      <section className="pod-section next-steps-section">
        <h2 className="section-title">Next Steps & Asks</h2>
        <ul className="next-steps-list">
          {pod.nextSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </section>

      {/* Feedback Widget */}
      <section className="pod-section feedback-section">
        <h2 className="section-title">Leave Feedback</h2>
        <p className="feedback-subtitle">Have a question or comment about this pod? Let us know.</p>

        {feedbackSubmitted ? (
          <div className="feedback-success">
            <span className="success-icon">✓</span>
            <p>Thank you! Your feedback has been submitted.</p>
          </div>
        ) : (
          <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
            <textarea
              className="feedback-input"
              placeholder="Share your thoughts, questions, or suggestions..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              required
            />
            <button type="submit" className="feedback-submit-btn">
              Submit Feedback
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default PodDetailPage;
