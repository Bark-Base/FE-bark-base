import { useHistory } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./NavigationBar.css";

export default function NavigationBar() {
  const { user } = useUser();
  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  return (
    <section className="horizontal-nav">
      <button onClick={() => handleClick("/")}>Home</button>
      {user ? (
        <button onClick={() => handleClick("/pets")}>My Pets</button>
      ) : null}
      {user ? (
        <button onClick={() => handleClick("/contacts")}>Contacts</button>
      ) : null}
      <button onClick={() => handleClick("/training")}>
        Training Resources
      </button>
      <button onClick={() => handleClick("/facts")}>Pet Facts</button>
    </section>
  );
}
