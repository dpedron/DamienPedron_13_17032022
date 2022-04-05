import styled from 'styled-components';
import editUserName from '../../features/editUserName';
import PropTypes from 'prop-types';

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

/**
 * @description The user can edit first and last name
 * @param {function} edit Define if the user is editing his name
 * @param {string} firstName User first name in database/state
 * @param {string} lastName User last name in database/state
 * @returns {JSX}
 */

export default function EditUser({ edit, firstName, lastName }) {
  const handleClick = (e) => {
    const targetCancel = e.currentTarget.id === 'cancel-modification';
    const firstNameLength = document.getElementById('first-name-modification')
      .value.length;
    const lastNameLength = document.getElementById('last-name-modification')
      .value.length;
    e.preventDefault();
    if (!targetCancel && (firstNameLength < 3 || lastNameLength < 3)) {
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

EditUser.propTypes = {
  edit: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
