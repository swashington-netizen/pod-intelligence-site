import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAllPods } from '../hooks/useAllPods';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const { pods, loading, error } = useAllPods();

  const handlePodClick = (podId) => {
    navigate(`/pods/${podId}`);
  };

  // Group pods by groupId
  const groupedPods = pods.reduce((acc, pod) => {
    if (!acc[pod.groupId]) {
      acc[pod.groupId] = [];
    }
    acc[pod.groupId].push(pod);
    return acc;
  }, {});

  // Define group metadata (colors and names)
  const groupMeta = {
    'agentic-sales-productivity': {
      name: 'Agentic Sales Productivity',
      color: '#0B7B7B',
    },
    'engagement-agent-sdrs-bdrs': {
      name: 'Engagement Agent for SDRs & BDRs',
      color: '#5C2D91',
    },
  };

  if (loading) {
    return (
      <div className="home-page">
        <div className="home-header">
          <h1>Agentic Sales Productivity</h1>
          <p className="home-subtitle">
            Transforming sales excellence through intelligent automation and AI-powered engagement
          </p>
        </div>
        <div className="loading-message">Loading pods...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-page">
        <div className="home-header">
          <h1>Agentic Sales Productivity</h1>
          <p className="home-subtitle">
            Transforming sales excellence through intelligent automation and AI-powered engagement
          </p>
        </div>
        <div className="error-message">
          <p>Failed to load pods: {error.message}</p>
          <p>Please check your API connection.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="home-page">
      <div className="home-header">
        <h1>Agentic Sales Productivity</h1>
        <p className="home-subtitle">
          Transforming sales excellence through intelligent automation and AI-powered engagement
        </p>
      </div>

      <div className="groups-container">
        {Object.entries(groupedPods).map(([groupId, groupPods]) => {
          const group = groupMeta[groupId] || { name: groupId, color: '#0070D2' };

          return (
            <div key={groupId} className="group-section">
              <div className="group-header" style={{ borderLeftColor: group.color }}>
                <h2>{group.name}</h2>
                <span className="pod-count">{groupPods.length} pods</span>
              </div>

              <div className="pods-grid">
                {groupPods.map((pod) => (
                  <div
                    key={pod.id}
                    className="pod-card"
                    style={{ borderLeftColor: group.color }}
                    onClick={() => handlePodClick(pod.id)}
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
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
