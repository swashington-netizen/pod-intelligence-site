import React from 'react';
import './PodMetricCard.css';

function PodMetricCard({ metric }) {
  const getTrendIcon = (trend) => {
    if (trend === 'up') return '↑';
    if (trend === 'down') return '↓';
    return '→';
  };

  const getTrendClass = (trend) => {
    if (trend === 'up') return 'trend-positive';
    if (trend === 'down') return 'trend-negative';
    return 'trend-neutral';
  };

  return (
    <div className="pod-metric-card">
      <div className="pod-metric-header">
        <span className="pod-metric-label">{metric.label}</span>
        <span className={`pod-metric-trend ${getTrendClass(metric.trend)}`}>
          {getTrendIcon(metric.trend)}
        </span>
      </div>
      <div className="pod-metric-value">{metric.value}</div>
      <div className="pod-metric-period">{metric.period}</div>
    </div>
  );
}

export default PodMetricCard;
