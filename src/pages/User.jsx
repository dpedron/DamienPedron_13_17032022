import { Header } from '../components/Header';
import { LinkTo } from '../components/LinkTo';
import styled from 'styled-components';
import { Account } from '../components/Account';

const StyledMain = styled.main`
  flex: 1;
  background-color: #12002b;
`;

/**
 * @description User page
 * @returns {JSX}
 */

export function User() {
  return (
    <>
      <Header
        children={
          <>
            <LinkTo
              icon={<i className="fa fa-user-circle"></i>}
              text="Username"
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
