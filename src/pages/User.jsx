import styled from 'styled-components';
import Account from '../components/user/Account';
import { useSelector } from 'react-redux';
import { selectGetAuthorization } from '../utils/redux/selectors';
import Status from '../components/user/Status';
import { useState, useEffect } from 'react';
import { store } from '../utils/redux/store';
import { apiBaseUrl } from '../utils/apiBaseUrl';
import { userData } from '../utils/redux/slices/userSlice';

const StyledMain = styled.main`
  flex: 1;
  background-color: #12002b;
`;

/**
 * @description User page
 * @returns {JSX}
 */

export default function User() {
  const getAuthorization = useSelector(selectGetAuthorization);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const state = store.getState();
    const getToken = state.auth.token;
    async function fetchData() {
      try {
        const response = await fetch(`${apiBaseUrl}user/profile`, {
          method: 'POST',
          headers: {
            authorization: `Bearer${getToken}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        store.dispatch(
          // Store user data
          userData({
            createdAt: data.body.createdAt,
            email: data.body.email,
            firstName: data.body.firstName,
            id: data.body.id,
            lastName: data.body.lastName,
            updatedAt: data.body.updatedAt,
          })
        );
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <StyledMain>
      {!getAuthorization ? (
        <Status
          title="Unauthenticated"
          subtitle="You must be authenticated to access this space"
        />
      ) : error ? (
        <Status title="Error" subtitle="We are sorry, an error occured ..." />
      ) : isLoading ? (
        <Status title="Loading" subtitle="Please wait, we get your data ..." />
      ) : (
        <Account />
      )}
    </StyledMain>
  );
}
