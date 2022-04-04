import { createStore } from 'redux';
import { saveToLocalStorage, loadFromLocalStorage } from './stateLocalStorage';
import { reducer } from './reducer';

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  reducer,
  loadFromLocalStorage(),
  reduxDevtools
);

// Save state to local storage when he is modified
store.subscribe(() => saveToLocalStorage(store.getState()));

/* 
const logMiddleware = (store) => (next) => (action) => {
  // on affiche chaque action dans la console
  console.log(action);
  return next(action);
};
export const store = configureStore({
  reducer: {
    token: tokenReducer,
    authorization: authorizationReducer,
    user: userReducer,
  },
  middleware: [logMiddleware],
}); */
