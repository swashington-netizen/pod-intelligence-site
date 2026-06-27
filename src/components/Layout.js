import React from 'react';
import Navigation from './Navigation';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />

      <main className="layout-main">
        <div className="page-content">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
