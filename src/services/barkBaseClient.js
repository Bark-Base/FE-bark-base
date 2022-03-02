const URL = "http://localhost:7890";
// const URL = 'https://boiling-meadow-81167.herokuapp.com'

export async function signUpUser(email, password) {
  try {
    const res = await fetch(`${URL}/api/v1/auth`, {
      credentials: "include",
      mode: "cors",
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const body = await res.json();
    return body;
  } catch (error) {
    console.error(error.message);
    return { error:'An account with that email already exists' }
  }
}

export async function signInUser(email, password) {
  const res = await fetch(`${URL}/api/v1/auth/session`, {
    credentials: "include",
    mode: "cors",
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const { error } = res.body;
  if (error) throw error;
  const body = await res.json();
  return body;
}

export async function getUser() {
  const res = await fetch(`${URL}/api/v1/auth/user`, {
    credentials: "include",
    mode: "cors",
  });
  const body = await res.json();
  // const { error } = res.body
  // if (error) throw error;
  return body;
}
