import React from "react";
import { Link } from "react-scroll";
import "./Hero.scss";

export default function Hero() {
  return (
    <section data-aos="fade-in" data-aos-delay="500" id="Hero" className="hero">
      <div className="max-content" data-aos="fade-right" data-aos-delay="800">
        <span className="hero__greetings">Hello, My name is</span>
        <h1 className="hero__name">Alejandro Brunella</h1>
        <h3 className="hero__role">Front end Developer & Designer.</h3>
        <p className="hero__intro">
          12 years experience as a high-quality <br />
          web designer and User Interface interface developer.
        </p>
        <Link
          to="Contact"
          className="button button__big button__primary__void hero__contact-me "
          offset={200}
          smooth={true}
          duration={800}
        >
          Contact me
        </Link>
      </div>
      <div className="hero__bottom-gradient"></div>
    </section>
  );
}
