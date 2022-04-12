import { createStore } from 'redux';
import { saveToLocalStorage, loadFromLocalStorage } from '../stateLocalStorage';
import { combineReducers } from 'redux';
import auth from './slices/authSlice';
import userData from './slices/userSlice';

export const reducer = combineReducers({
  auth: auth,
  user: userData,
});

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  reducer,
  loadFromLocalStorage(),
  reduxDevtools
);

// Save state to local storage when he is modified
store.subscribe(() => saveToLocalStorage(store.getState()));
