import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    authorization: false,
    remember: false,
  },
  reducers: {
    token(state, action) {
      state.token = action.payload;
    },
    authorization(state, action) {
      state.authorization = action.payload;
    },
    remember(state) {
      state.remember = !state.remember;
    },
  },
});

export const { token, authorization, remember } = auth.actions;
export default auth.reducer;
