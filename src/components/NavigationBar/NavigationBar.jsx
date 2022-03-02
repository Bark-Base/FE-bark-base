import { NavLink } from 'react-router-dom'
import { useUser } from "../../context/UserContext";
import "./NavigationBar.css";

const URL = "http://localhost:7890";
// const URL = 'https://boiling-meadow-81167.herokuapp.com'

export default function NavigationBar() {
  const { user, setUser } = useUser();

  const handleLogout = async() => {
    await fetch(`${URL}/api/v1/auth/session`, {
      credentials: "include",
      mode: "cors",
      method: "delete"
    });
    setUser({})
}
  

  return (
    <section className="horizontal-nav2">
<NavLink exact to="/">
    <button>home</button>
  </NavLink>
  {!user.email ? (<NavLink  to="/auth">
    <button>Login</button>
  </NavLink>) : (<NavLink exact to="/">
    <button onClick={() => handleLogout()}>Sign Out</button>
  </NavLink>)}
{user.email ? (<NavLink to="/pets">
    <button>My Pets</button>
  </NavLink>) : null}
  {user.email ? (<NavLink to="/contacts">
    <button>Contacts</button>
  </NavLink>) : null}
<NavLink to="/training">
    <button>Training</button>
  </NavLink>
<NavLink to="/facts">
    <button>Facts</button>
  </NavLink>
    </section>
  );
}
