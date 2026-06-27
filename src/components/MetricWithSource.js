import React, { useState } from 'react';
import './MetricWithSource.css';

function MetricWithSource({ metric }) {
  const [showSource, setShowSource] = useState(false);

  const getTrendIcon = (trend) => {
    if (trend === 'up') return '↑';
    if (trend === 'down') return '↓';
    return '→';
  };

  return (
    <div className="metric-with-source">
      <div className="metric-header">
        <span className="metric-label-text">{metric.label}</span>
        {metric.trend && (
          <span className={`metric-trend-icon trend-${metric.trend}`}>
            {getTrendIcon(metric.trend)}
          </span>
        )}
      </div>

      <div className="metric-value-large">{metric.value}</div>

      <div className="metric-context">{metric.context}</div>

      <button
        className="source-toggle"
        onClick={() => setShowSource(!showSource)}
        aria-label="Show data source"
      >
        Source: {metric.source}
      </button>

      {showSource && (
        <div className="source-details">
          Data pulled from: {metric.source}
        </div>
      )}
    </div>
  );
}

export default MetricWithSource;
