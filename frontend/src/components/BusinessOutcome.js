import React from 'react';
import './BusinessOutcome.css';

/**
 * BusinessOutcome - Prominently displays pod's business outcomes
 * First section on pod pages to answer "Why does this matter?"
 */
function BusinessOutcome({ outcomes, highlight }) {
  return (
    <div className="business-outcome-section">
      <h2 className="business-outcome-title">Business Outcomes</h2>
      <p className="business-outcome-subtitle">What this pod delivers</p>

      {highlight && (
        <div className="outcome-highlight">
          <span className="outcome-highlight-icon">🎯</span>
          <p className="outcome-highlight-text">{highlight}</p>
        </div>
      )}

      <ul className="outcomes-list">
        {outcomes.map((outcome, index) => (
          <li key={index} className="outcome-item">
            <span className="outcome-check">✓</span>
            <span className="outcome-text">{outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessOutcome;
