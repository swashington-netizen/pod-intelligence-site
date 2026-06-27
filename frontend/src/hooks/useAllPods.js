/**
 * useAllPods Hook
 *
 * Custom hook for fetching all pods with loading, error, and data states.
 * Fetches lightweight pod data for listing views.
 *
 * @returns {Object} { pods, loading, error, refetch }
 */

import { useState, useEffect } from 'react';
import { fetchAllPods } from '../api/pods';

export function useAllPods() {
  const [pods, setPods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on mount
  useEffect(() => {
    const loadPods = async () => {
      try {
        setLoading(true);
        setError(null);

        const podsData = await fetchAllPods();
        setPods(podsData);
      } catch (err) {
        console.error('Error fetching pods:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPods();
  }, []);

  // Refetch function for manual refresh
  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);

      const podsData = await fetchAllPods();
      setPods(podsData);
    } catch (err) {
      console.error('Error fetching pods:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Return pods, loading, error states and refetch function
  return {
    pods,
    loading,
    error,
    refetch,
  };
}

export default useAllPods;
