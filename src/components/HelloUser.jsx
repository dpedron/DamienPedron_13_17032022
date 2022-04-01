import { useState } from 'react';
import styled from 'styled-components';
import EditUser from './EditUser';
import { useSelector } from 'react-redux';

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
  const [isEditing, setIsEditing] = useState(false);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
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
        <EditUser edit={edit} />
      ) : (
        <StyledButton onClick={edit}>Edit Name</StyledButton>
      )}
    </StyledWrapper>
  );
}
