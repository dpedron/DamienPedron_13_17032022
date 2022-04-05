import styled from 'styled-components';
import { Account } from '../components/user/Account';
import { useSelector } from 'react-redux';
import tokenValidity from '../features/tokenValidity';
import { selectGetAuthorization } from '../utils/selectors';

const StyledMain = styled.main`
  flex: 1;
  background-color: #12002b;
`;

/**
 * @description User page
 * @returns {JSX}
 */

tokenValidity();

export function User() {
  const getAuthorization = useSelector(selectGetAuthorization);
  if (!getAuthorization) {
    return <div>Vous devez vous authentifier</div>;
  } else {
    return (
      <StyledMain>
        <Account />
      </StyledMain>
    );
  }
}
