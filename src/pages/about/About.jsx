import React from "react";
import AlejandroBrunella2 from "../../assets/images/croped-nobg-idea2.png";
import "./About.scss";

export default function About() {
  return (
    <>
      <section id="About" className="about">
        <div className="max-content">
          <div
            className="about__info"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="100"
          >
            <h2 className="about__info__title">About me</h2>
            <p className="about__info__text">
              I'm a <span className="secondary-color">Graphic designer </span>
              and
              <span className="secondary-color"> Front-end developer </span>
              based in Buenos Aires, Argentina. I build user experiences "
              <b>beginning to end</b>", for web products like: applications,
              websites and interactive experiments that look great and work even
              better.
            </p>
            <p className="about__info__text">
              For the past 5 years i've focused on front end development with
              <b> React</b> and <b>Javascript</b> but i always apply design
              knowledge to everything i do to create intuitive and dynamic
              interfaces.
            </p>
            <p className="about__info__text">
              I like methodologies that make work better, and i love learning
              new things every chance i get.
            </p>
          </div>
          <div
            className="about__picture"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="400"
            data-aos-offset="100"
          >
            <img src={AlejandroBrunella2} alt="" />
          </div>
          <div
            className="about__links"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="500"
            data-aos-offset="100"
          >
            <p className="about__links__more large-text">
              Want to know more about me?
            </p>
            <a
              href="https://www.linkedin.com/in/alejandro-brunella-6625017a/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button__primary"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-brunella-6625017a/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button__primary__void"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/brunellaa"
              target="_blank"
              rel="noopener noreferrer"
              className="button button__primary__void"
            >
              Github
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
