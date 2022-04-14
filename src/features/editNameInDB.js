import { store } from '../utils/redux/store';
import { userData } from '../utils/redux/slices/userSlice';
import { apiBaseUrl } from '../utils/apiBaseUrl';

// Username edition, add modifications to database

export default async function editNameInDB() {
  const state = store.getState();
  const token = state.auth.token;
  const firstName = document.getElementById('first-name-modification').value;
  const lastName = document.getElementById('last-name-modification').value;

  try {
    const response = await fetch(`${apiBaseUrl}user/profile`, {
      method: 'PUT',
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
      headers: {
        authorization: `Bearer${token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    store.dispatch(
      // Store first and last name modifications
      userData({
        firstName: data.body.firstName,
        lastName: data.body.lastName,
      })
    );
  } catch (err) {
    console.log(err);
  }
}
