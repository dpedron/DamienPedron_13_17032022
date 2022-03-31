import { store } from './store';
import { fetchData } from './fetchData';
import { userAction, authorizationAction } from './store';

export default async function getData() {
  const state = store.getState();
  const getToken = state.token;

  const data = await fetchData(
    'http://localhost:3001/api/v1/user/profile',
    'POST',
    null,
    {
      authorization: `Bearer${getToken}`,
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
    store.dispatch(authorizationAction(true));
  }
}
