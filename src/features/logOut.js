import { store } from '../utils/store';
import {
  tokenAction,
  authorizationAction,
  userAction,
  rememberAction,
} from '../utils/actions';
import { userInitialState } from '../utils/reducer';

/**
 * Logout, reset to initial state (expect remember if he is checked)
 */

export default function logOut() {
  const state = store.getState();
  const remember = state.auth.remember;
  store.dispatch(tokenAction(''));
  store.dispatch(authorizationAction(false));
  store.dispatch(userAction(userInitialState));
  remember && store.dispatch(rememberAction());
}
