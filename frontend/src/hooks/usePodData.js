/**
 * usePodData Hook
 *
 * Custom hook for fetching pod data with loading, error, and data states.
 * Fetches data on mount and handles all states.
 *
 * @param {string} podId - Pod identifier to fetch
 * @returns {Object} { data, loading, error, refetch }
 */

import { useState, useEffect } from 'react';
import { fetchPod } from '../api/pods';

export function usePodData(podId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPodData = async () => {
    if (!podId) {
      setError(new Error('Pod ID is required'));
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const podData = await fetchPod(podId);
      setData(podData);
    } catch (err) {
      console.error('Error fetching pod data:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on mount and when podId changes
  useEffect(() => {
    loadPodData();
  }, [podId]);

  // Return data, loading, error states and refetch function
  return {
    data,
    loading,
    error,
    refetch: loadPodData,
  };
}

export default usePodData;
