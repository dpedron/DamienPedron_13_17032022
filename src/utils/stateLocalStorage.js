/**
 * @description Save the state to the local storage
 * @returns {string}
 */

export function saveToLocalStorage(state) {
  try {
    const stateToString = JSON.stringify(state);
    localStorage.setItem('persistantState', stateToString);
  } catch (error) {
    console.log(error);
  }
}

/**
 * @description Load the state to the local storage
 * @returns {object}
 */

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
