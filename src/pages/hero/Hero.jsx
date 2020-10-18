import React from "react";
import { Link } from "react-scroll";
import "./Hero.scss";

export default function Hero() {
  return (
    <section
      data-aos="fade-in"
      data-aos-delay="500"
      data-aos-duration="3000"
      id="Hero"
      className="hero"
    >
      <div className="max-content" data-aos="fade-right" data-aos-delay="800">
        <span className="hero__greetings">Hello, My name is</span>
        <h1 className="hero__name">Alejandro Brunella</h1>
        <h3 className="hero__role">Front end Developer & Designer.</h3>
        <p className="hero__intro">
          I've been working for{" "}
          <span className="secondary-color"> 12 years</span> as a high-quality
          web designer <br />
          and user interface developer.
        </p>
        <div data-aos="fade-in" data-aos-delay="1800">
          <Link
            to="Contact"
            className="button  button__primary__void button__big"
            offset={200}
            smooth={true}
            duration={800}
          >
            Contact me
          </Link>
        </div>
      </div>
      <div className="hero__bottom-gradient"></div>
    </section>
  );
}
