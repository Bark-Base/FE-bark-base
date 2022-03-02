import { useHistory, NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./VerticalNav.css";
import { useState, useEffect } from 'react';

const URL = "http://localhost:7890";
// const URL = 'https://boiling-meadow-81167.herokuapp.com'

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
        await fetch(`${URL}/api/v1/auth/session`, {
          credentials: "include",
          mode: "cors",
          method: "delete"
        });
        setUser({})
    }

  return (
    <section className="vert-nav">
        {user.email ?
              <button onClick={() => handleClick('/pets')}>My Pets</button>
              : null
        }
        {user.email ?
               <button onClick={() => handleClick('/contacts')}>Contacts</button>
              : null
        }
        {!user.email ? <article className="temp-text">
        <h3>New Pet owner? </h3>
        <span>Go to Facts to get the info you need to keep your pet (and yourself) happy.</span> <br/>
        <h3>Pet misbehaving?</h3> <span>Go to Training for great videos on how to tame that pet.</span><br/>
        <h3>Click Login</h3>
        <span> to make an account so you can keep track of your pet's health and contacts.</span>
        </article> : null}

      { !user.email ? <button onClick={() => handleClick('/auth')}>Log In</button> : (<NavLink exact to="/">
    <button 
    onClick={() => handleLogout()}
    >Sign Out</button>
  </NavLink>)}
      <button onClick={() => handleClick('/training')}>Training Videos</button>
      <button onClick={() => handleClick('/facts')}>Pet Facts</button>
    </section>
  );
}
