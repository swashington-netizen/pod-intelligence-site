import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Badge from './Badge';
import './PodCard.css';

function PodCard({ pod, featured = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pod/${pod.id}`);
  };

  return (
    <Card
      className={`pod-card ${featured ? 'pod-card-featured' : ''}`}
      onClick={handleClick}
      clickable={true}
    >
      {featured && (
        <div className="featured-badge">
          <span className="featured-label">★ Critical Initiative</span>
        </div>
      )}

      <div className="pod-card-header">
        <div
          className="pod-color-indicator"
          style={{ backgroundColor: pod.color }}
        />
        <div className="pod-card-title-section">
          <h3 className="pod-card-title">{pod.name}</h3>
          <Badge status={pod.status} />
        </div>
      </div>

      <p className="pod-card-description">{pod.description}</p>

      {pod.owner && (
        <div className="pod-card-meta">
          <span className="meta-label">Owner:</span>
          <span className="meta-value">{pod.owner}</span>
        </div>
      )}

      {pod.keyInitiatives && pod.keyInitiatives.length > 0 && (
        <div className="pod-card-initiatives">
          <span className="initiatives-count">
            {pod.keyInitiatives.length} key initiative{pod.keyInitiatives.length !== 1 ? 's' : ''}
          </span>
        </div>
      )}
    </Card>
  );
}

export default PodCard;
