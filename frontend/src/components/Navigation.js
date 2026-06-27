import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { groups } from '../data/podsConfig';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isPodActive = (slug) => {
    return location.pathname === `/pods/${slug}`;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="top-nav-content">
          <div className="nav-left">
            <button className="menu-toggle" onClick={toggleSidebar}>
              ☰
            </button>
            <h1 className="nav-title" onClick={() => navigate('/')}>
              Agentic Sales Productivity
            </h1>
          </div>
        </div>
      </nav>

      {/* Sidebar Navigation */}
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          {/* Home Link */}
          <div
            className={`sidebar-item home-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => {
              navigate('/');
              setIsSidebarOpen(false);
            }}
          >
            <span className="sidebar-icon">🏠</span>
            <span>Home</span>
          </div>

          {/* Groups and Pods */}
          {groups.map((group) => (
            <div key={group.id} className="sidebar-group">
              <div className="sidebar-group-header" style={{ borderLeftColor: group.color }}>
                <span className="group-name">{group.name}</span>
              </div>

              <div className="sidebar-pods">
                {group.pods.map((pod) => (
                  <div
                    key={pod.id}
                    className={`sidebar-pod-item ${isPodActive(pod.slug) ? 'active' : ''}`}
                    onClick={() => {
                      navigate(`/pods/${pod.slug}`);
                      setIsSidebarOpen(false);
                    }}
                  >
                    <span className="pod-indicator" style={{ backgroundColor: group.color }}></span>
                    <span className="pod-name">{pod.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </>
  );
};

export default Navigation;
