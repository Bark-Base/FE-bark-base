import request from 'superagent';
const URL = 'http://localhost:7890';
// const URL = 'https://boiling-meadow-81167.herokuapp.com'

  export async function signUpUser(email, password) {
    const res = await request.post(`${URL}/api/v1/auth`).send({ email, password });
    const { error } = res.body;
    if (error) throw error;
    return res.body;
  }
  
  export async function signInUser(email, password) {
    const res = await request.post(`${URL}/api/v1/auth/session`).send({ email, password });
    const { error } = res.body
    if (error) throw error;
    return res.body;
  }


  // send future requests for user-related content using .withcredentials