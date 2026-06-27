import React from 'react';
import './Badge.css';
import { statusConfig } from '../data/pods';

function Badge({ status, label }) {
  const config = statusConfig[status] || statusConfig.planning;
  const displayLabel = label || config.label;

  return (
    <span
      className="badge"
      style={{
        color: config.color,
        backgroundColor: config.backgroundColor
      }}
    >
      {displayLabel}
    </span>
  );
}

export default Badge;
