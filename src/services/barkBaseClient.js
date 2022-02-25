import request from 'superagent';

const URL = 'https://boiling-meadow-81167.herokuapp.com'

  export async function signUpUser(email, password) {
    const { user, error } = await request.post(`${URL}/api/v1/auth`).send({ email, password });
    if (error) throw error;
    return user;
  }
  
  export async function signInUser(email, password) {
    const { user, error } = await request.post(`${URL}/api/v1/auth/session`).send({ email, password });
    if (error) throw error;
    return user;
  }


  // send future requests for user-related content using .withcredentials