import styled from 'styled-components';
import editNameInDB from '../../features/editNameInDB';
import PropTypes from 'prop-types';
import { useState } from 'react';

const StyledForm = styled.form`
  margin: auto;
  width: 400px;
`;
const StyledInput = styled.input`
  width: 180px;
  height: 30px;
  margin: 5px;
`;

const StyledError = styled.p`
  margin: 0;
  color: #ff726f;
  font-weight: bold;
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
  const [error, setError] = useState(false);

  // Handle the edition of the username
  const editUserName = (e) => {
    e.preventDefault();
    const saveButton = e.currentTarget.id === 'save-modification';
    const firstNameLength = document.getElementById('first-name-modification')
      .value.length;
    const lastNameLength = document.getElementById('last-name-modification')
      .value.length;
    if (saveButton && (firstNameLength < 2 || lastNameLength < 2)) {
      setError(true); // To handle error
    } else {
      editNameInDB(e); // Add modifications to database
      edit(); // To hide edit form in parent component
    }
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
      {error && (
        <StyledError>Each field must contain at least 2 characters</StyledError>
      )}
      <StyledButton id="save-modification" onClick={(e) => editUserName(e)}>
        Save
      </StyledButton>
      <StyledButton id="cancel-modification" onClick={(e) => editUserName(e)}>
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
