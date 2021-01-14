import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/icons/icon-ft-gh.svg";
import { ReactComponent as CodepenIcon } from "../../assets/icons/icon-ft-codepen.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/icon-ft-tw.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/icon-ft-li.svg";

import "./Contact.scss";

function Contact() {
  return (
    <section id="Contact" className="contact">
      <div className="contact__info max-content">
        <span className="contact__invite">Lets build something together!</span>
        <h2 className="contact__title">Get in touch</h2>
        <p>
          Although im currently employed im open to hearing about{" "}
          <br className="mobile-hide" />
          new projects and meeting new people in the tech field.
        </p>
        <a
          className="button button__primary"
          href="mailto:alejandro.brunella@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
        <ul className="contact__icons-list">
          <li>
            <a
              href="https://github.com/brunellaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/abrunella"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodepenIcon />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ABGDesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alejandro-brunella-6625017a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
