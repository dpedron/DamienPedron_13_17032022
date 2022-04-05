import { store } from '../utils/store';
import { tokenAction, authorizationAction } from '../utils/actions';

export default function logOut() {
  store.dispatch(tokenAction(''));
  store.dispatch(authorizationAction(false));
}
