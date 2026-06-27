import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateItem.css';

function UpdateItem({ update }) {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'milestone':
        return '🎯';
      case 'announcement':
        return '📢';
      case 'update':
        return '📝';
      default:
        return '•';
    }
  };

  const handleClick = () => {
    if (update.podId) {
      navigate(`/pod/${update.podId}`);
    }
  };

  return (
    <div
      className={`update-item ${update.podId ? 'update-item-clickable' : ''}`}
      onClick={handleClick}
    >
      <div className="update-icon">{getTypeIcon(update.type)}</div>
      <div className="update-content">
        <div className="update-header">
          <span className="update-title">{update.title}</span>
          <span className="update-date">{formatDate(update.date)}</span>
        </div>
        <p className="update-description">{update.description}</p>
      </div>
    </div>
  );
}

export default UpdateItem;
