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
      console.log(user, error)
      await setUser(user);
      setLoading(false);
      error? setError(error) : await history.replace('/');
      
    } catch (error) {
      throw error;
    }
  };

  return (
    <section style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2rem"}}>
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
      <button className="" type="button" onClick={() => setLogin(!login)}>
        {login ? "do you need to Sign up?" : "do you need to Log in?"}
      </button>
      {isError ? <p>{isError}</p> : null }
      {isLoading ? <h1>....Loading</h1> : null}
    </section>
  );
}
