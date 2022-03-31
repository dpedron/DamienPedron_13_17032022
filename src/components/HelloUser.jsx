import { useState } from 'react';
import styled from 'styled-components';
import EditUser from './EditUser';
import { store } from '../utils/store';

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
  const [edit, setEdit] = useState(false);
  const state = store.getState();

  return (
    <StyledWrapper>
      <h1>
        Welcome back
        {!edit && (
          <>
            <br />
            {state.user.firstName} {state.user.lastName}
          </>
        )}
      </h1>
      {edit ? (
        <EditUser />
      ) : (
        <StyledButton
          onClick={() => {
            setEdit(!edit);
          }}
        >
          Edit Name
        </StyledButton>
      )}
    </StyledWrapper>
  );
}
