import styled from 'styled-components';

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

const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;

/**
 * @description Form to sign in
 * @returns {JSX}
 */

export function SignInContent() {
  return (
    <StyledSection>
      <StyledIcon className="fa fa-user-circle"></StyledIcon>
      <h1>Sign In</h1>
      <form>
        <StyledInputWrapper>
          <label for="username">Username</label>
          <input type="text" id="username" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label for="password">Password</label>
          <input type="password" id="password" />
        </StyledInputWrapper>
        <StyledInputRemember>
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </StyledInputRemember>
        <StyledButton class="sign-in-button">Sign In</StyledButton>
      </form>
    </StyledSection>
  );
}
