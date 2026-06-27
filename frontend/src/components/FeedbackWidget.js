import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import './FeedbackWidget.css';

function FeedbackWidget({ prompt, team }) {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Feedback submitted:', { feedback, email, timestamp: new Date() });
    setSubmitted(true);
    setTimeout(() => {
      setFeedback('');
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <Card className="feedback-widget feedback-success">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <div className="success-text">
            <strong>Thanks for your feedback!</strong>
            <p>We'll follow up within 24 hours.</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="feedback-widget">
      <h3 className="feedback-title">Questions or Feedback?</h3>
      <p className="feedback-prompt">{prompt}</p>

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="feedback-text" className="form-label">
            Your comment or question
          </label>
          <textarea
            id="feedback-text"
            className="form-textarea"
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="e.g., What's the timeline for expanding beyond SMB?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feedback-email" className="form-label">
            Your email (so we can follow up)
          </label>
          <input
            id="feedback-email"
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@salesforce.com"
            required
          />
        </div>

        <div className="form-footer">
          <Button type="submit" variant="primary">
            Send Feedback
          </Button>
          <span className="team-info">Managed by {team}</span>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackWidget;
