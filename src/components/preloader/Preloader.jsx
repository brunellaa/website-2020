import React from "react";
import { ReactComponent as Logo } from "../../assets/images/Logo-Alejandro-Brunella.svg";
import "./Preloader.scss";

function Preloader() {
  return (
    <div className="preloader">
      <Logo
        data-aos="zoom-in"
        data-aos-duration="5500"
        data-aos-delay="5000"
        className="preloader__logo"
        alt="Alejandro Brunella"
      />
    </div>
  );
}

export default Preloader;
