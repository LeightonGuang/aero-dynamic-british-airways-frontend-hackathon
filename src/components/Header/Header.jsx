import "./Header.scss";
import BaLogo from "../../assets/logos/british-airways-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import menuIcon from "../../assets/icons/hamburger.svg";

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
      <div className="header__nav-buttons">
        <div>
          <button className="header__button">
            <img src={searchIcon} alt="" />
          </button>
        </div>
        <div>
          <button
            className="header__button header__button--search"
            aria-label="Open menu"
            style={{ cursor: "pointer" }}
          >
            <img src={menuIcon} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
