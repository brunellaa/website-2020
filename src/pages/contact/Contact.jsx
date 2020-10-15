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
        <h2 className="contact__title">Let's talk...</h2>
        <p>
          Although im currently employed im open to hearing about{" "}
          <br className="mobile-hide" />
          new projects and meeting new people in the tech field.
        </p>
        <button className="button button__primary"> Say HI!</button>
        <ul className="contact__icons-list">
          <li>
            <GithubIcon />
          </li>
          <li>
            <CodepenIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <LinkedinIcon />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
