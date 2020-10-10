import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="max-content">
        <span className="hero__greetings">Hello, My name is</span>
        <h1 className="hero__name">Alejandro Brunella</h1>
        <h3 className="hero__role">Front end Developer & Designer.</h3>
        <p className="hero__intro">
          12 years experience as a high-quality <br />
          web designer and User Interface interface developer.
        </p>
        <button className="button button__primary__void hero__contact-me ">
          Contact me
        </button>
      </div>
      <div className="hero__bottom-gradient"></div>
    </section>
  );
}
