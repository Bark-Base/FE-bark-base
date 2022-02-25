import request from 'superagent';

const URL = 'https://boiling-medow-81167.herokuapp.com/api/v1'

  export async function signUpUser(email, password) {
    const { user, error } = await request.post(`${URL}/auth`).send({ email, password });
    if (error) throw error;
    return user;
  }
  
  export async function signInUser(email, password) {
    const { user, error } = await request.post(`${URL}/auth`).send({ email, password });
    if (error) throw error;
    return user;
  }