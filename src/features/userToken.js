import { fetchData } from '../utils/fetchData';
import { store } from '../utils/store';
import { tokenAction } from '../utils/actions';
import userData from './userData';

export default async function userToken() {
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const data = await fetchData(
    'http://localhost:3001/api/v1/user/login',
    'POST',
    JSON.stringify({
      email: email,
      password: password,
    }),
    {
      'Content-type': 'application/json; charset=UTF-8',
    }
  );
  if (data.status === 200) {
    const token = data.body.token;
    store.dispatch(tokenAction(token));
    userData();
  }
}
