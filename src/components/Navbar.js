import React, { useEffect } from "react";
import "../style/navbar.css";
import mujImg from "../assets/logoMUJ.png";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
  const { isuserloggedin } = useAuth();

  return (
    <div className='navbar-full'>
      <nav>
        <img src={mujImg} alt='' className='muj-img' />
        <ul className='nav-items'>
          <li>{isuserloggedin ? "Dashboard" : "Home"}</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
