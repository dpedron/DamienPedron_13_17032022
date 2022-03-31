// This function add abstraction to the call of API
// For example, it can handle a loader automatically

export async function fetchData(url, method, body, headers) {
  const response = await fetch(url, {
    method: method,
    body: body,
    headers: headers,
  });
  const data = await response.json();
  return data;
}
