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
export function loadFromStorage() {
  try {
    const reduxStateLocal = localStorage.getItem('reduxState');
    const reduxStateSession = sessionStorage.getItem('reduxState');
    if (reduxStateSession !== null) {
      return JSON.parse(reduxStateSession); // If the state is in session storage, load him
    }
    if (reduxStateLocal === null) return undefined; // If the state is not in local storage, no state to load
    return JSON.parse(reduxStateLocal); // If the state is in local storage, load him
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
