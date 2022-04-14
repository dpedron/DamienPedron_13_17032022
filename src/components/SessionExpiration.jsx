import styled from 'styled-components';
import {
  acceptDisconnection,
  cancelDisconnection,
} from '../features/sessionExpiration';

const StyledBackGround = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledContainer = styled.div`
  border: 5px solid #00bc77;
  margin: 64px auto;
  padding: 20px 0;
  background: white;
  max-width: 400px;
  @media (min-width: 920px) {
    max-width: 600px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 1.4rem;
  margin: 10px 0 20px 0;
  @media (min-width: 920px) {
    font-size: 2rem;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  width: 100px;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: ${(props) => (props.cancel ? '#ff726f' : '#00bc77')};
  border: none;
  color: #fff;
  cursor: pointer;
  @media (min-width: 920px) {
    font-size: 1.1rem;
  }
`;

/**
 * @description Pop-up for session expiration
 * @returns {JSX}
 */

export default function SessionExpiration() {
  return (
    <StyledBackGround id="alert">
      <StyledContainer>
        <StyledTitle>
          Your session expires in 2 minutes :<br />
        </StyledTitle>
        <StyledButtonContainer>
          <StyledButton onClick={() => acceptDisconnection()}>Ok</StyledButton>
          <StyledButton onClick={() => cancelDisconnection()} cancel>
            Cancel
          </StyledButton>
        </StyledButtonContainer>
      </StyledContainer>
    </StyledBackGround>
  );
}
