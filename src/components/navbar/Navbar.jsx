import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import "./Navbar.css";
import { useHistory } from "react-router-dom";



const Navbar = () => {
  const history = useHistory()
  const { user } = useContext(AuthContext);

  function handleClick() {
    history.push("/login");
  }

  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{color:'inherit' ,textDecoration:'none'}}>
          <span className="logo">Room Reservation</span>
          </Link>
          {
            user ? user.username :(
              <div className="navItems">
              <button className="navButton" onClick={handleClick}>Login</button>
              <button className="navButton">Register</button>
            </div>
            )
          }
     
        </div>
      </div>
    </>
  );
};

export default Navbar;
