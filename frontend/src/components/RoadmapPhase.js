import React from 'react';
import Badge from './Badge';
import './RoadmapPhase.css';

function RoadmapPhase({ phase }) {
  const getStatusForBadge = (status) => {
    if (status === 'completed') return 'active';
    if (status === 'active') return 'critical';
    return 'planning';
  };

  return (
    <div className="roadmap-phase">
      <div className="roadmap-phase-header">
        <div className="roadmap-phase-title-section">
          <span className="roadmap-phase-number">{phase.phase}</span>
          <div className="roadmap-phase-title-group">
            <h4 className="roadmap-phase-title">{phase.title}</h4>
            <span className="roadmap-phase-quarter">{phase.quarter}</span>
          </div>
        </div>
        <Badge status={getStatusForBadge(phase.status)} label={phase.status} />
      </div>

      <ul className="roadmap-phase-items">
        {phase.items.map((item, index) => (
          <li key={index} className="roadmap-phase-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoadmapPhase;
