import styled from 'styled-components';

const StyledWrapper = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

/**
 * @description Hello user
 * @returns {JSX}
 */

export function HelloUser() {
  return (
    <StyledWrapper>
      <h1>
        Welcome back
        <br />
        Username !
      </h1>
      <StyledButton>Edit Name</StyledButton>
    </StyledWrapper>
  );
}
