import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { tokenAction, authorizationAction, userAction } from './actions';

const tokenReducer = createReducer(0, (builder) => {
  return builder.addCase(tokenAction, (state, action) => {
    return action.payload;
  });
});

const authorizationReducer = createReducer(false, (builder) => {
  builder.addCase(authorizationAction, (state, action) => {
    return action.payload;
  });
});

const userReducer = createReducer(
  {
    firstName: '',
    lastName: '',
    logAt: '',
  },
  (builder) =>
    builder.addCase(userAction, (state, action) => {
      return action.payload;
    })
);

export const reducer = combineReducers({
  token: tokenReducer,
  authorization: authorizationReducer,
  user: userReducer,
});
