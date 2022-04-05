import { store } from '../utils/store';
import { userAction, authorizationAction } from '../utils/actions';

export default async function getUserData() {
  const state = store.getState();
  const getToken = state.token;
  fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: {
      authorization: `Bearer${getToken}`,
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('error');
      }
    })
    .then((data) => {
      store.dispatch(
        userAction({
          firstName: data.body.firstName,
          lastName: data.body.lastName,
          logAt: Date.now(),
        })
      );
      store.dispatch(authorizationAction(true));
    });
}
