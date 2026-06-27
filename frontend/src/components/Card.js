import React from 'react';
import './Card.css';

function Card({ children, className = '', onClick, clickable = false }) {
  const cardClasses = `card ${clickable ? 'card-clickable' : ''} ${className}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;
