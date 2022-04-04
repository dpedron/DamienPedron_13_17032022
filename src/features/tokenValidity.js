import { store } from '../utils/store';
import { tokenAction, authorizationAction } from '../utils/actions';

export default function tokenValidity() {
  const state = store.getState();
  const logTime = state.user.logAt;
  const tokenExpired = Date.now() - logTime > 3600000;
  if (tokenExpired) {
    store.dispatch(tokenAction(''));
    store.dispatch(authorizationAction(false));
  }
  return;
}
