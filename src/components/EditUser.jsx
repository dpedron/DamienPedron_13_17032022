import styled from 'styled-components';

const StyledForm = styled.form`
  margin: auto;
  width: 400px;
`;
const StyledInput = styled.input`
  width: 180px;
  height: 30px;
  margin: 5px;
`;
const StyledButton = styled.button`
  width: 110px;
  height: 30px;
  margin: 5px;
  font-weight: bold;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;

export default function EditUser() {
  return (
    <StyledForm>
      <StyledInput type="text" id="first-name"></StyledInput>
      <StyledInput type="text" id="last-name"></StyledInput>
      <StyledButton>Save</StyledButton>
      <StyledButton>Cancel</StyledButton>
    </StyledForm>
  );
}
