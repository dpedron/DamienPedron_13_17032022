import styled from 'styled-components';
import {
  acceptDisconnection,
  cancelDisconnection,
} from '../features/sessionExpiration';

const StyledBackGround = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledContainer = styled.div`
  width: 650px;
  height: 150px;
  border: 5px solid #00bc77;
  margin: 64px auto;
  background: white;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  width: 100px;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: ${(props) => (props.cancel ? '#ff726f' : '#00bc77')};
  border: none;
  color: #fff;
  cursor: pointer;
`;

export default function SessionExpiration() {
  return (
    <StyledBackGround id="alert">
      <StyledContainer>
        <h1>
          Your session expires in 5 minutes :<br />
        </h1>
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
