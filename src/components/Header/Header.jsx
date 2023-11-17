import "./Header.scss";
import BaLogo from "../../assets/logos/british-airways-logo.svg";

import { FaBars } from "react-icons/fa";

import React from "react";

const Header = () => {
  return (
    <header
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div className="header__logo-div">
        <a href="/" className="header__link">
          <img className="header__logo-logo" src={BaLogo} alt="BA Logo" />
        </a>
      </div>

      <div>
        {/* Hamburger menu icon */}
        <button
          className="header__button"
          aria-label="Open menu"
          style={{ cursor: "pointer" }}
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
