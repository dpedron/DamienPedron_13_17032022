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
  store.dispatch(token(''));
  store.dispatch(authorization(false));
  store.dispatch(userData(initialState));
  getRemember && store.dispatch(remember()); // If 'remember me' checked do nothing, let him checked
}
