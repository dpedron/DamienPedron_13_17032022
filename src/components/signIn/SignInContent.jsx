import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import authentication from '../../features/authentication';
import { rememberAction } from '../../utils/actions';
import { store } from '../../utils/store';

const StyledSection = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const StyledIcon = styled.i`
  font-size: 5rem;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
  input {
    padding: 5px;
    font-size: 1.2rem;
  }
  label {
    font-weight: bold;
  }
`;

const StyledInputRemember = styled.div`
  display: flex;
  label {
    margin-left: 0.25rem;
  }
`;

const StyledButton = styled(Link)`
  display: block;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  background-color: #00bc77;
  color: #fff;
  text-decoration: none;
`;

/**
 * @description Form to sign in
 * @returns {JSX}
 */

export function SignInContent() {
  const state = store.getState();
  const remember = state.auth.remember;
  let navigate = useNavigate();

  useEffect(() => {
    remember && navigate('/user');
  });

  return (
    <StyledSection>
      <StyledIcon className="fa fa-user-circle"></StyledIcon>
      <h1>Sign In</h1>
      <form>
        <StyledInputWrapper>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </StyledInputWrapper>
        <StyledInputRemember>
          <input
            type="checkbox"
            id="remember-me"
            onClick={() => store.dispatch(rememberAction())}
          />
          <label htmlFor="remember-me">Remember me</label>
        </StyledInputRemember>
        <StyledButton
          to="/user"
          className="sign-in-button"
          onClick={() => authentication()}
        >
          Sign In
        </StyledButton>
      </form>
    </StyledSection>
  );
}
