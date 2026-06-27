import React from 'react';
import './SectionHeader.css';

function SectionHeader({ title, subtitle, actions }) {
  return (
    <div className="section-header">
      <div className="section-header-text">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {actions && <div className="section-actions">{actions}</div>}
    </div>
  );
}

export default SectionHeader;
