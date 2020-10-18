import React from "react";
import Logo from "../../assets/images/Logo-Alejandro-Brunella.svg";
import { Link } from "react-scroll";

import "./Header.scss";

const Header = () => {
  const duration = 800;
  return (
    <header data-aos="fade-down" data-aos-duration="500" data-aos-once="true">
      <Link
        to="Hero"
        className="header__nav__logo"
        smooth={true}
        offset={-100}
        duration={duration}
      >
        <img
          src={Logo}
          className="header__logo"
          alt="Alejandro Brunella Logo"
        />
      </Link>
      <nav role="navigation" className="header__nav mobile-hide">
        <Link
          to="About"
          className="header__nav__link"
          activeClass="header__nav__link--active"
          offset={-1}
          spy={true}
          smooth={true}
          duration={duration}
          data-aos-once="true"
        >
          About
        </Link>
        <Link
          to="Skills"
          className="header__nav__link"
          activeClass="header__nav__link--active"
          offset={-80}
          spy={true}
          smooth={true}
          duration={duration}
        >
          Skills
        </Link>
        <Link
          to="Work"
          className="header__nav__link"
          activeClass="header__nav__link--active"
          spy={true}
          smooth={true}
          duration={duration}
        >
          Work
        </Link>
        <Link
          to="Contact"
          className="header__nav__button"
          offset={200}
          smooth={true}
          duration={duration}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
