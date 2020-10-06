import React from "react";
import Logo from "../../assets/images/Logo-Alejandro-Brunella.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img src={Logo} className="header__logo" alt="Alejandro Brunella Logo" />
      <nav className="header__nav">
        <a className="header__nav__link" href="/">
          About
        </a>
        <a className="header__nav__link" href="/">
          Skills
        </a>
        <a className="header__nav__link" href="/">
          Work
        </a>
        <a className="header__nav__button" href="/">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
