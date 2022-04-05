import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { tokenAction, authorizationAction, userAction } from './actions';

const tokenReducer = createReducer('', (builder) => {
  return builder.addCase(tokenAction, (state, action) => {
    return action.payload;
  });
});

const authorizationReducer = createReducer(false, (builder) => {
  builder.addCase(authorizationAction, (state, action) => {
    return action.payload;
  });
});

const userInitialState = {
  createdAt: '',
  email: '',
  firstName: '',
  id: '',
  lastName: '',
  updatedAt: '',
};

const userReducer = createReducer(userInitialState, (builder) =>
  builder.addCase(userAction, (state, action) => {
    return action.payload;
  })
);

export const reducer = combineReducers({
  token: tokenReducer,
  authorization: authorizationReducer,
  user: userReducer,
});
