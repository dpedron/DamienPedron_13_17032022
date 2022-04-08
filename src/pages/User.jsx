import styled from 'styled-components';
import { Account } from '../components/user/Account';
import { useSelector } from 'react-redux';
import { selectGetAuthorization } from '../utils/selectors';
import { useUserData } from '../utils/useUserData';
import Status from '../components/user/Status';

const StyledMain = styled.main`
  flex: 1;
  background-color: #12002b;
`;

/**
 * @description User page
 * @returns {JSX}
 */

export function User() {
  useUserData();
  const getAuthorization = useSelector(selectGetAuthorization);
  const { error, isLoading } = useUserData();
  const ok = getAuthorization && !error && !isLoading;

  return (
    <StyledMain>
      {!getAuthorization && (
        <Status
          title="Unauthenticated"
          subtitle="You must be authenticated to access this space"
        />
      )}
      {error && (
        <Status title="Error" subtitle="We are sorry, an error occured ..." />
      )}
      {isLoading && (
        <Status title="Loading" subtitle="Please wait, we get you data ..." />
      )}
      {ok && <Account />}
    </StyledMain>
  );
}
