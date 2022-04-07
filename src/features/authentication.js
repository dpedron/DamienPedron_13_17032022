import { store } from '../utils/store';
import { tokenAction } from '../utils/actions';
import { userAction, authorizationAction } from '../utils/actions';
import { apiBaseUrl } from '../utils/apiBaseUrl';
import { sessionValidity } from './sessionExpiration';

export default async function authentication() {
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  fetch(`${apiBaseUrl}user/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
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
      const token = data.body.token;
      store.dispatch(tokenAction(token));
    })
    // When the user is authenticated successfully, get his data from database
    .then(() => {
      const state = store.getState();
      const getToken = state.auth.token;
      fetch(`${apiBaseUrl}user/profile`, {
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
          console.log(data);
          store.dispatch(
            userAction({
              createdAt: data.body.createdAt,
              email: data.body.email,
              firstName: data.body.firstName,
              id: data.body.id,
              lastName: data.body.lastName,
              updatedAt: data.body.updatedAt,
            })
          );
          store.dispatch(authorizationAction(true));
          sessionValidity();
        });
    });
}
