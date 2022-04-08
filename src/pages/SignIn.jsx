import styled from 'styled-components';
import { SignInContent } from '../components/signIn/SignInContent';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../utils/store';

const StyledMain = styled.main`
  flex: 1;
  background-color: #12002b;
`;

/**
 * @description Sign in page
 * @returns {JSX}
 */

export function SignIn() {
  const state = store.getState();
  const remember = state.auth.remember;
  const authorization = state.auth.authorization;
  let navigate = useNavigate();

  useEffect(() => {
    remember && authorization && navigate('/user'); // User checked "remember be" and he is authentified --> go to user page
  });
  return (
    <>
      <StyledMain>
        <SignInContent />
      </StyledMain>
    </>
  );
}
