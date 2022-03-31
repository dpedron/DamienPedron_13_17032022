import { Header } from '../components/Header';
import { LinkTo } from '../components/LinkTo';
import styled from 'styled-components';
import { Account } from '../components/Account';
import { store } from '../utils/store';
import { useSelector } from 'react-redux';

const StyledMain = styled.main`
  flex: 1;
  background-color: #12002b;
`;

/**
 * @description User page
 * @returns {JSX}
 */

export function User() {
  const getAuthorization = useSelector((state) => state.authorization);
  const state = store.getState();
  if (!getAuthorization) {
    return <div>Vous devez vous authentifier</div>;
  } else {
    return (
      <>
        <Header
          children={
            <>
              <LinkTo
                icon={<i className="fa fa-user-circle"></i>}
                text={state.user.firstName}
                linkTo="/sign-in"
              />
              <LinkTo
                icon={<i className="fa fa-sign-out"></i>}
                text="Sign Out"
                linkTo="/"
              />
            </>
          }
        />
        <StyledMain>
          <Account />
        </StyledMain>
      </>
    );
  }
}
