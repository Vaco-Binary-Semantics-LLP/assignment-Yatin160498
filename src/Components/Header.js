import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>Welcome to Sports League</h1>
      <div className="headerBar">
        <NavLink to="/" className="Link">
          Home
        </NavLink>
        <NavLink to="/Teams" className="Link">
          Teams
        </NavLink>

        <NavLink to="/Players" className="Link">
          Players
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
