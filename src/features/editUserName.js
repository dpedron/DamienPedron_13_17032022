import { store } from '../utils/store';
import { userAction } from '../utils/actions';
import { apiBaseUrl } from '../utils/apiBaseUrl';

export default async function editName(e) {
  e.preventDefault();
  const state = store.getState();
  const token = state.token;
  const firstName = document.getElementById('first-name-modification').value;
  const lastName = document.getElementById('last-name-modification').value;

  if (firstName.length < 3 || lastName.length < 3) {
    return;
  }

  fetch(`${apiBaseUrl}user/profile`, {
    method: 'PUT',
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
    }),
    headers: {
      authorization: `Bearer${token}`,
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
        })
      );
    });
}
