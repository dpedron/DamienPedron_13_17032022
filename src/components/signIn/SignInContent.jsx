import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectRemember } from '../../utils/redux/selectors';
import { apiBaseUrl } from '../../utils/apiBaseUrl';
import { sessionExpiration } from '../../features/sessionExpiration';
import { useState } from 'react';
import {
  token,
  authorization,
  remember,
} from '../../utils/redux/slices/authSlice';

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

const StyledError = styled.p`
  color: red;
  font-weight: bold;
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
 * @description Sign in form
 * @returns {JSX}
 */

export default function SignInContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getRemember = useSelector(selectRemember);
  const [error, setError] = useState(false);

  // On form submit
  async function authentication(e) {
    e.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
      const response = await fetch(`${apiBaseUrl}user/login`, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      const getToken = data.body.token;
      dispatch(token(getToken)); // Store user token
      dispatch(authorization(true)); // Store the authorization
    } catch (err) {
      console.log(err);
      return setError(true); // Handle error
    }
    // No error
    sessionExpiration(); // Set timer for session expiration
    navigate('/user'); // Go to user page
  }

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
        {error && <StyledError>Unknown user</StyledError>}
        <StyledInputRemember>
          <input
            type="checkbox"
            id="remember-me"
            defaultChecked={getRemember} // Define by the state
            onClick={() => dispatch(remember())}
          />
          <label htmlFor="remember-me">Remember me</label>
        </StyledInputRemember>
        <StyledButton
          to="/user"
          className="sign-in-button"
          onClick={(e) => {
            authentication(e);
          }}
        >
          Sign In
        </StyledButton>
      </form>
    </StyledSection>
  );
}
