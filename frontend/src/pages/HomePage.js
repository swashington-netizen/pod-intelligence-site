import React from 'react';
import { useNavigate } from 'react-router-dom';
import { groups } from '../data/podsConfig';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handlePodClick = (slug) => {
    navigate(`/pods/${slug}`);
  };

  return (
    <div className="home-page">
      <div className="home-header">
        <h1>Agentic Sales Productivity</h1>
        <p className="home-subtitle">
          Transforming sales excellence through intelligent automation and AI-powered engagement
        </p>
      </div>

      <div className="groups-container">
        {groups.map((group) => (
          <div key={group.id} className="group-section">
            <div className="group-header" style={{ borderLeftColor: group.color }}>
              <h2>{group.name}</h2>
              <span className="pod-count">{group.pods.length} pods</span>
            </div>

            <div className="pods-grid">
              {group.pods.map((pod) => (
                <div
                  key={pod.id}
                  className="pod-card"
                  style={{ borderLeftColor: group.color }}
                  onClick={() => handlePodClick(pod.slug)}
                >
                  <div className="pod-card-header">
                    <h3>{pod.name}</h3>
                  </div>
                  <p className="pod-mission">{pod.mission}</p>
                  <div className="pod-card-footer">
                    <span className="view-details">View Details →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
