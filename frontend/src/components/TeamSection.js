import React from 'react';
import './TeamSection.css';

/**
 * TeamSection - Display cross-functional team with avatar placeholders
 * Designed for easy replacement with real data
 */
function TeamSection({ team }) {
  // Generate avatar placeholder with initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  // Generate consistent color from name
  const getAvatarColor = (name) => {
    const colors = [
      '#0176d3', // Salesforce blue
      '#2e844a', // Green
      '#9050e9', // Purple
      '#fe9339', // Orange
      '#0b7b7b', // Teal
      '#c23934', // Red
    ];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <div className="team-section">
      <h3 className="team-section-title">Cross-Functional Team</h3>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            <div
              className="team-avatar"
              style={{ backgroundColor: getAvatarColor(member.name) }}
            >
              {getInitials(member.name)}
            </div>
            <div className="team-member-info">
              <div className="team-member-name">{member.name}</div>
              <div className="team-member-role">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
