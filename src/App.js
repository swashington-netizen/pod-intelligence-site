import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PodDetailPage from './pages/PodDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pods/:slug" element={<PodDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
