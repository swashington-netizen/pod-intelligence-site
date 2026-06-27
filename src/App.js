import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StakeholderDashboard from './pages/StakeholderDashboard';
import Dashboard from './pages/Dashboard';
import PodDetail from './pages/PodDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<StakeholderDashboard />} />
          <Route path="/executive" element={<Dashboard />} />
          <Route path="/pod/:podId" element={<PodDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
