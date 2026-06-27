import React from 'react';
import Badge from './Badge';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const getStatusBadgeStatus = (status) => {
    if (status === 'completed') return 'active';
    if (status === 'planning') return 'planning';
    return 'active';
  };

  return (
    <div className="project-card">
      <div className="project-card-header">
        <h4 className="project-card-title">{project.name}</h4>
        <Badge status={getStatusBadgeStatus(project.status)} label={project.status} />
      </div>

      <div className="project-progress-section">
        <div className="project-progress-header">
          <span className="project-progress-label">Progress</span>
          <span className="project-progress-value">{project.progress}%</span>
        </div>
        <div className="project-progress-bar">
          <div
            className="project-progress-fill"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      <div className="project-card-meta">
        <div className="project-meta-item">
          <span className="project-meta-label">Team:</span>
          <span className="project-meta-value">{project.team}</span>
        </div>
        <div className="project-meta-item">
          <span className="project-meta-label">Target:</span>
          <span className="project-meta-value">{project.dueDate}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
