import { combineReducers, createStore } from 'redux';

export const TOKEN = 'token';
export const AUTHORIZATION = 'autorization';
export const USER = 'user';

// ACTIONS

export const tokenAction = (token) => ({
  type: TOKEN,
  payload: token,
});
export const authorizationAction = () => ({ type: AUTHORIZATION });
export const userAction = (userInfo) => ({ type: USER, payload: userInfo });

// REDUCERS

function tokenReducer(state = 0, action) {
  if (action.type === TOKEN) {
    return action.payload;
  }
  return state;
}

function authorizationReducer(state = false, action) {
  if (action.type === AUTHORIZATION) {
    return !state.authorization;
  }
  return state;
}

function userReducer(
  state = null /* {
    firstName: '',
    lastName: '',
    createdAt: '',
    email: '',
    id: '',
    updatedAt: '',
  } */,
  action
) {
  if (action.type === USER) {
    return action.payload;
  }
  return state;
}

// COMBINE REDUCER

const reducer = combineReducers({
  token: tokenReducer,
  authorization: authorizationReducer,
  user: userReducer,
});

// STORE

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, reduxDevtools);
