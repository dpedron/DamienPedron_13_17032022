import styled from 'styled-components';
import { SignInContent } from '../components/signIn/SignInContent';

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
      <StyledMain>
        <SignInContent />
      </StyledMain>
    </>
  );
}
