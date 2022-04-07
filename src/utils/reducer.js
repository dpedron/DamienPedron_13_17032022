import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  tokenAction,
  authorizationAction,
  userAction,
  rememberAction,
} from './actions';

const authInitialState = {
  token: '',
  authorization: false,
  remember: false,
};

const auth = createReducer(authInitialState, (builder) => {
  builder.addCase(tokenAction, (state, action) => {
    return { ...state, token: action.payload };
  });
  builder.addCase(authorizationAction, (state, action) => {
    return { ...state, authorization: action.payload };
  });
  builder.addCase(rememberAction, (state) => {
    return { ...state, remember: !state.remember };
  });
});

export const userInitialState = {
  createdAt: '',
  email: '',
  firstName: '',
  id: '',
  lastName: '',
  updatedAt: '',
};

const user = createReducer(userInitialState, (builder) =>
  builder.addCase(userAction, (state, action) => {
    return action.payload;
  })
);

export const reducer = combineReducers({
  auth,
  user,
});
