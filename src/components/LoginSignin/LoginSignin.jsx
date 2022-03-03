import { useHistory } from 'react-router-dom';
import { useState } from "react";
import "./LoginSignin.css";
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/barkBaseClient';

export default function LoginSignin() {
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const { setUser } = useUser();
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
  const [ isError, setError ] = useState(false);

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { user } = await signInUser(userEmail, password);
      await setUser(user);
      setLoading(false);
      await history.replace('/');
    } catch (error) {
      throw error;
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { user , error } = await signUpUser(userEmail, password);
      await setUser(user);
      setLoading(false);
      error? setError(error) : await history.replace('/');
      
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className='LoginSigninSection'>
      <header>{login ? <div>Log In</div> : <div>Sign up</div>}</header>
      <form
        className="LoginSigninForm"
        onSubmit={login ? handleLogIn : handleSignUp}
      >
        <input
          className=""
          type="email"
          id="email"
          required
          placeholder="email"
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className=""
          type="password"
          id="password"
          required
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="" type="submit">
          Submit
        </button>
      </form>
      <button className="login-switch" type="button" onClick={() => setLogin(!login)}>
        {login ? "do you need to Sign Up instead?" : "do you need to Log In instead?"}
      </button>
      {isError==='an account with that email already exists' ? <p>{isError}</p> : null }
      {isLoading ? <h1>....Loading</h1> : null}
    </section>
  );
}
