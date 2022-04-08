import { useState, useEffect } from 'react';
import { apiBaseUrl } from './apiBaseUrl';
import { store } from './store';
import { userAction } from './actions';
import { sessionExpiration } from '../features/sessionExpiration';

export function useUserData() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const state = store.getState();
    const token = state.auth.token;
    async function fetchData() {
      try {
        const response = await fetch(`${apiBaseUrl}user/profile`, {
          method: 'POST',
          headers: {
            authorization: `Bearer${token}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        store.dispatch(
          userAction({
            createdAt: data.body.createdAt,
            email: data.body.email,
            firstName: data.body.firstName,
            id: data.body.id,
            lastName: data.body.lastName,
            updatedAt: data.body.updatedAt,
          })
        );
        sessionExpiration();
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { isLoading, error };
}
