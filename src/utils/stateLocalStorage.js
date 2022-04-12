// Save the state to the local storage
export function saveToLocalStorage(state) {
  try {
    const stateToString = JSON.stringify(state);
    localStorage.setItem('persistantState', stateToString);
  } catch (error) {
    console.log(error);
  }
}

// Load the state to the local storage
export function loadFromLocalStorage() {
  try {
    const persistantState = localStorage.getItem('persistantState');
    if (persistantState === null) return undefined;
    return JSON.parse(persistantState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
