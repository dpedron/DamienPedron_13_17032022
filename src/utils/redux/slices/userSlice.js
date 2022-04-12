import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  createdAt: '',
  email: '',
  firstName: '',
  id: '',
  lastName: '',
  updatedAt: '',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userData(state, action) {
      return action.payload;
    },
  },
});

export const { userData } = user.actions;
export default user.reducer;
