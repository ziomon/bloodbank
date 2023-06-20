import React from "react";
import "../Assets/Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ onLogout, islogged }){
let links;
  if (islogged === "true") {
    links = (
      <>
        <Link to="/profile">Profile</Link>
        <Link to="/" onClick={onLogout}>Logout</Link>
      </>
    );
  } else {
    links = <Link to="/login">Login</Link>;
  }

  console.log(islogged);
  return (
    <div className="navbar">
      <span className="navbarLogo whiteText">
        <h1>
          <Link to="/" id="navbarLogo">
            Blood Bank
          </Link>
        </h1>
      </span>
      <span className="navbarLinks">
        <Link className="darkAccent" to="/Contact">
          Contact
        </Link>
        {links}
      </span>
    </div>
  );
}

export default Navbar;
