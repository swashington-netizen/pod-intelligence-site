/**
 * API Configuration
 *
 * Centralized configuration for API endpoints.
 * Uses REACT_APP_API_BASE_URL from environment variables.
 */

// Get API base URL from environment
// Falls back to localhost for development
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

// API endpoints
export const API_ENDPOINTS = {
  health: `${API_BASE_URL}/health`,
  pods: `${API_BASE_URL}/api/pods`,
  pod: (podId) => `${API_BASE_URL}/api/pods/${podId}`,
  feedback: `${API_BASE_URL}/api/feedback`,
};

// Default fetch options
export const DEFAULT_FETCH_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};
