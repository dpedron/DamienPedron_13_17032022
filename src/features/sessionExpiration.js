import { store } from '../utils/store';
import logOut from './logOut';

let disconnection;

/**
 * Timer for session expiration
 */

function timer() {
  const alert = document.getElementById('alert');
  setTimeout(function () {
    // After 25 minutes of connection alert the user that his connection will expire in 5 minutes
    alert.style.display = 'block';
  }, 1500000);
  disconnection = setTimeout(function () {
    // After 30 minutes of connection the user is disconnected
    logOut();
    alert.style.display = 'none';
  }, 1800000);
}

/**
 * On authentification when 'remember me' not checked launch the timer for session expiration
 */

export function sessionValidity() {
  const state = store.getState();
  const auth = state.auth.authorization;
  const remember = state.auth.remember;
  if (auth && !remember) {
    timer();
  }
}

/**
 * Cancel the automatic disconnection and reset the timer
 */

export function cancelDisconnection() {
  const alert = document.getElementById('alert');
  alert.style.display = 'none';
  clearTimeout(disconnection);
  timer();
}

/**
 * The user accept the disconnection in 5 minutes
 */

export function acceptDisconnection() {
  const alert = document.getElementById('alert');
  alert.style.display = 'none';
}
