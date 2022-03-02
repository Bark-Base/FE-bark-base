import { useHistory, Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./VerticalNav.css";
import { useState, useEffect } from 'react';

export default function VerticalNav() {
    const {user, setUser} = useUser()
    const history = useHistory();
    const [ isLoading, setLoading ]= useState(false);
  
    function handleClick(path) {
        history.push(path);
      }
      
      useEffect(() => {
        setLoading(true);
        user? setLoading(false) : setLoading(true);
      }, [user])

      const handleLogout = async() => {
        await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/session`, {
          credentials: "include",
          mode: "cors",
          method: "delete"
        });
        setUser({})
    }

  return (
    <section className="vert-nav">
        {isLoading? <h1>...Loading</h1> : null}
        {user?.email ?
              <button onClick={() => handleClick('/pets')}>My Pets</button>
              : null
        }
        {user?.email ?
               <button onClick={() => handleClick('/contacts')}>Contacts</button>
              : null
        }

      { !user.email ? <button onClick={() => handleClick('/auth')}>Log In</button> : (<Link to="/">
    <button 
    onClick={() => handleLogout()}
    >Sign Out</button>
  </Link>)}
      <button onClick={() => handleClick('/training')}>Training Videos</button>
      <button onClick={() => handleClick('/facts')}>Pet Facts</button>
    </section>
  );
}
