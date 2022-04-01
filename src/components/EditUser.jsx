import styled from 'styled-components';
import editUserName from '../utils/editUserName';
import { useSelector } from 'react-redux';

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

export default function EditUser({ edit }) {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const handleClick = (e) => {
    const firstNameLength = document.getElementById('first-name-modification')
      .value.length;
    const lastNameLength = document.getElementById('last-name-modification')
      .value.length;
    e.preventDefault();
    if (firstNameLength < 3 || lastNameLength < 3) {
      return;
    }
    edit();
  };
  return (
    <StyledForm>
      <StyledInput
        type="text"
        id="first-name-modification"
        placeholder={firstName}
      />
      <StyledInput
        type="text"
        id="last-name-modification"
        placeholder={lastName}
      />
      <StyledButton
        id="save-modification"
        onClick={(e) => {
          editUserName(e);
          handleClick(e);
        }}
      >
        Save
      </StyledButton>
      <StyledButton id="cancel-modification" onClick={(e) => handleClick(e)}>
        Cancel
      </StyledButton>
    </StyledForm>
  );
}
