import { store } from '../utils/redux/store';
import {
  token,
  authorization,
  remember,
} from '../utils/redux/slices/authSlice';
import { userData } from '../utils/redux/slices/userSlice';
import { initialState } from '../utils/redux/slices/userSlice';

// Logout, reset to initial state
export default function logOut() {
  const state = store.getState();
  const getRemember = state.auth.remember;
  store.dispatch(token('')); // Remove token from the state
  store.dispatch(authorization(false)); // Remove authorization from the state
  store.dispatch(userData(initialState)); // Remove user data from the state
  getRemember && store.dispatch(remember()); // If 'remember me' checked, uncheck him
  sessionStorage.clear(); // Clear session storage
  localStorage.clear(); // Clear local storage
}
