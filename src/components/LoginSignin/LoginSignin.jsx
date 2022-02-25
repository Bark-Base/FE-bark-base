import { useHistory } from 'react-router-dom';
import { useState } from "react";
import "./LoginSignin.css";
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/barkBaseClient';

export default function LoginSignin() {
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const { setUser } = useUser;
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const auth = await signInUser(userEmail, password);
      await setUser(auth);
      setLoading(false);
      history.replace('/');
    } catch (error) {
      throw error;
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const auth = await signUpUser(userEmail, password);
      await setUser(auth);
      setLoading(false);
      history.replace('/');
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      {login ? <div>Log In</div> : <div>Sign up</div>}

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
      <button style={{ backgroundColor: 'white', border: 'none' }} className="" type="button" onClick={() => setLogin(!login)}>
        {login ? "do you need to Sign up?" : "do you need to Log in?"}
      </button>
      {isLoading ? <h1>....Loading</h1> : null}
    </>
  );
}
