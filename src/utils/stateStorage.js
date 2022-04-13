// Save the state to the local storage if 'remember checked' else to the session storage
export function saveToStorage(state) {
  const getRemember = state.auth.remember;
  const storage = getRemember ? localStorage : sessionStorage;
  try {
    const stateToString = JSON.stringify(state);
    storage.setItem('reduxState', stateToString);
  } catch (error) {
    console.log(error);
  }
}

// Load the state to the local storage
export function loadFromLocalStorage() {
  try {
    const reduxState = localStorage.getItem('reduxState');
    if (reduxState === null) return undefined;
    return JSON.parse(reduxState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
