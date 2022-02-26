import { useHistory } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./VerticalNav.css";

export default function VerticalNav() {
    const {user} = useUser()
    const history = useHistory();

    function handleClick(path) {
        history.push(path);
      }


  return (
    <section className="vert-nav">
        {user ?
              <button onClick={() => handleClick('/pets')}>My Pets</button>
              : null
        }
        {user ?
               <button onClick={() => handleClick('/contacts')}>Contacts</button>
              : null
        }
        {!user ? <article><div>You should make an account!</div> Recusandae dolor voluptas ipsa nisi omnis consectetur. Natus, veritatis laborum iusto facere numquam similique nam id est vel impedit corporis praesentium eius! Voluptas impedit totam, fugiat fugit aspernatur, consequatur eius vitae non possimus, facilis corporis vel aut temporibus iure quidem obcaecati praesentium officiis suscipit.</article> : null}

      <button onClick={() => handleClick('/auth')}>Log In</button>
      <button onClick={() => handleClick('/training')}>Training Resources</button>
      <button onClick={() => handleClick('/facts')}>Pet Facts</button>
    </section>
  );
}
