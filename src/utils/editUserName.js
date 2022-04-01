import { fetchData } from './fetchData';
import { store } from './store';
import { userAction } from './store';

export default async function editName(e) {
  e.preventDefault();
  const state = store.getState();
  const token = state.token;
  const firstName = document.getElementById('first-name-modification').value;
  const lastName = document.getElementById('last-name-modification').value;

  if (firstName.length < 3 || lastName.length < 3) {
    return;
  }

  const data = await fetchData(
    'http://localhost:3001/api/v1/user/profile',
    'PUT',
    JSON.stringify({
      firstName: firstName,
      lastName: lastName,
    }),
    {
      authorization: `Bearer${token}`,
      'Content-type': 'application/json; charset=UTF-8',
    }
  );
  if (data.status === 200) {
    store.dispatch(
      userAction({
        firstName: data.body.firstName,
        lastName: data.body.lastName,
      })
    );
  }
}
