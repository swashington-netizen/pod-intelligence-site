import React from 'react';
import './MetricCard.css';

function MetricCard({ metric }) {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <span className="metric-label">{metric.label}</span>
        {metric.trend && (
          <span className={`metric-trend trend-${metric.trend}`}>
            {metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '→'}
          </span>
        )}
      </div>
      <div className="metric-value-section">
        <span className="metric-value" style={{ color: metric.color }}>
          {metric.value}
        </span>
        {metric.total && (
          <span className="metric-total">/ {metric.total}</span>
        )}
      </div>
      {(metric.status || metric.description) && (
        <span className="metric-description">
          {metric.status || metric.description}
        </span>
      )}
    </div>
  );
}

export default MetricCard;
