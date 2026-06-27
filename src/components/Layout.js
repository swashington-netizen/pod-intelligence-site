import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="header-content">
          <Link to="/" className="logo-link">
            <h1 className="site-title">Agentic Sales Productivity</h1>
          </Link>
          <nav className="main-nav">
            <Link to="/" className={isHome ? 'nav-link active' : 'nav-link'}>
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="layout-main">
        <div className="page-container">
          {children}
        </div>
      </main>

      <footer className="layout-footer">
        <div className="footer-content">
          <p>&copy; 2026 Salesforce • Agentic Sales Productivity Portal</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
