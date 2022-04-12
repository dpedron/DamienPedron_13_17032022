import { useState } from 'react';
import styled from 'styled-components';
import EditUser from './EditUser';
import { useSelector } from 'react-redux';
import { selectFirstName, selectLastName } from '../../utils/redux/selectors';

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

export default function HelloUser() {
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const [isEditing, setIsEditing] = useState(false);

  // To modify the state of this component here and through the child component
  const edit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <StyledWrapper>
      <h1>
        Welcome back
        {!isEditing && (
          <>
            <br />
            {firstName} {lastName}
          </>
        )}
      </h1>
      {isEditing ? (
        <EditUser edit={edit} firstName={firstName} lastName={lastName} />
      ) : (
        <StyledButton onClick={edit}>Edit Name</StyledButton>
      )}
    </StyledWrapper>
  );
}
