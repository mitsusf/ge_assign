import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.worldvectorlogo.com/logos/general-electric.svg"
        ></img>
      </Link>
      <div className="header__nav">
        <Link to="/" className="header__link">
          <div>
            <h2>Home / </h2>
          </div>
        </Link>
        <Link to="/route2" className="header__link">
          <div>
            <h2>Download</h2>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
