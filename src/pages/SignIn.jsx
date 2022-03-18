import { Header } from '../components/Header';
import { LinkTo } from '../components/LinkTo';
import styled from 'styled-components';
import { SignInContent } from '../components/SignInContent';

const StyledMain = styled.main`
  flex: 1;
  background-color: #12002b;
`;

/**
 * @description Sign in page
 * @returns {JSX}
 */

export function SignIn() {
  return (
    <>
      <Header
        children={
          <LinkTo
            icon={<i className="fa fa-user-circle"></i>}
            text="Sign In"
            linkTo="/sign-in"
          />
        }
      />
      <StyledMain>
        <SignInContent />
      </StyledMain>
    </>
  );
}
