import React from 'react';
import './SourceBadge.css';

/**
 * SourceBadge - Indicates data provenance for transparency
 * Shows where content originates (Slack, Drive, Manual, etc.)
 */
function SourceBadge({ source, lastUpdated, size = 'medium' }) {
  // Map source types to icons and colors
  const sourceConfig = {
    'Slack Canvas': { icon: '💬', color: '#611f69' },
    'Slack Channel': { icon: '💬', color: '#611f69' },
    'Google Drive': { icon: '📄', color: '#4285f4' },
    'Product Roadmap': { icon: '🗺️', color: '#0176d3' },
    'Architecture Repo': { icon: '⚙️', color: '#2e844a' },
    'Manual Entry': { icon: '✏️', color: '#706e6b' },
    'Future API': { icon: '🔌', color: '#9050e9' },
    'Demo Data': { icon: '🎭', color: '#fe9339' },
  };

  const config = sourceConfig[source] || { icon: '📊', color: '#706e6b' };

  return (
    <div className={`source-badge source-badge-${size}`}>
      <span className="source-icon" style={{ color: config.color }}>
        {config.icon}
      </span>
      <div className="source-text">
        <span className="source-name">{source}</span>
        {lastUpdated && (
          <span className="source-updated">Updated {lastUpdated}</span>
        )}
      </div>
    </div>
  );
}

export default SourceBadge;
