/**
 * Pod API Client
 *
 * Functions for fetching pod data from the backend API.
 */

import { API_ENDPOINTS, DEFAULT_FETCH_OPTIONS } from './config';

/**
 * Fetch all pods (lightweight data for listing)
 *
 * @returns {Promise<Array>} Array of pod objects with id, name, groupId, mission
 */
export async function fetchAllPods() {
  const response = await fetch(API_ENDPOINTS.pods, DEFAULT_FETCH_OPTIONS);

  if (!response.ok) {
    throw new Error(`Failed to fetch pods: ${response.statusText}`);
  }

  const data = await response.json();
  return data.pods;
}

/**
 * Fetch single pod with full content
 *
 * @param {string} podId - Pod identifier
 * @returns {Promise<Object>} Pod object with complete content
 */
export async function fetchPod(podId) {
  const response = await fetch(API_ENDPOINTS.pod(podId), DEFAULT_FETCH_OPTIONS);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Pod not found');
    }
    throw new Error(`Failed to fetch pod: ${response.statusText}`);
  }

  const data = await response.json();
  return data.pod;
}

/**
 * Submit feedback for a pod
 *
 * @param {Object} feedback - Feedback data
 * @param {string} feedback.podId - Pod identifier
 * @param {string} feedback.message - Feedback message
 * @param {string} [feedback.userEmail] - Optional user email
 * @returns {Promise<Object>} Response with success status
 */
export async function submitFeedback({ podId, message, userEmail }) {
  const response = await fetch(API_ENDPOINTS.feedback, {
    ...DEFAULT_FETCH_OPTIONS,
    method: 'POST',
    body: JSON.stringify({ podId, message, userEmail }),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit feedback: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
