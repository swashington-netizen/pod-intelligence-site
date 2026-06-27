import React from 'react';
import Badge from './Badge';
import './RoadmapCard.css';

function RoadmapCard({ item }) {
  return (
    <div className="roadmap-card">
      <div className="roadmap-card-header">
        <span className="roadmap-quarter">{item.quarter}</span>
        <Badge status={item.status} />
      </div>
      <h3 className="roadmap-title">{item.title}</h3>
      <p className="roadmap-description">{item.description}</p>
    </div>
  );
}

export default RoadmapCard;
