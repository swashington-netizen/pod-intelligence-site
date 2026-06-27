import React from 'react';
import { pods } from '../data/pods';
import './PortfolioMap.css';

function PortfolioMap() {
  return (
    <div className="portfolio-map">
      <div className="map-container">
        <div className="map-legend">
          <div className="legend-item">
            <div className="legend-line line-data-flow"></div>
            <span>Data Flow</span>
          </div>
          <div className="legend-item">
            <div className="legend-line line-integration"></div>
            <span>Integration</span>
          </div>
          <div className="legend-item">
            <div className="legend-line line-dependency"></div>
            <span>Dependency</span>
          </div>
        </div>

        <div className="map-grid">
          {pods.map((pod) => (
            <div key={pod.id} className="map-node">
              <div
                className={`map-node-badge ${pod.status === 'critical' ? 'map-node-critical' : ''}`}
                style={{ borderColor: pod.color }}
              >
                <div
                  className="map-node-indicator"
                  style={{ backgroundColor: pod.color }}
                />
                <span className="map-node-name">{pod.shortName}</span>
              </div>
              <span className="map-node-label">{pod.name}</span>
            </div>
          ))}
        </div>

        <svg className="map-connections" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
          {/* Connection lines - simplified visual representation */}
          <line x1="150" y1="100" x2="300" y2="100" className="connection-line line-data-flow" />
          <line x1="150" y1="100" x2="450" y2="100" className="connection-line line-integration" />
          <line x1="300" y1="200" x2="150" y2="300" className="connection-line line-dependency" />
          <line x1="450" y1="200" x2="300" y2="300" className="connection-line line-data-flow" />
          <line x1="150" y1="300" x2="450" y2="300" className="connection-line line-integration" />
        </svg>
      </div>

      <div className="map-note">
        <span className="map-note-text">
          Portfolio architecture showing key relationships and data flows
        </span>
      </div>
    </div>
  );
}

export default PortfolioMap;
