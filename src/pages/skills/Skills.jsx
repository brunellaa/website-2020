import React from "react";
import { ReactComponent as Skill1 } from "../../assets/icons/skill-1.svg";
import { ReactComponent as Skill2 } from "../../assets/icons/skill-2.svg";
import { ReactComponent as Skill3 } from "../../assets/icons/skill-3.svg";
import { ReactComponent as IconHTML } from "../../assets/icons/icon-html.svg";
import { ReactComponent as IconAI } from "../../assets/icons/icon-ai.svg";
import { ReactComponent as IconCSS } from "../../assets/icons/icon-css.svg";
import { ReactComponent as IconFIGMA } from "../../assets/icons/icon-figma.svg";
import { ReactComponent as IconJS } from "../../assets/icons/icon-javascript.svg";
import { ReactComponent as IconTS } from "../../assets/icons/icon-typescript.svg";
import { ReactComponent as IconREACT } from "../../assets/icons/icon-react.svg";
import { ReactComponent as IconNODE } from "../../assets/icons/icon-node.svg";
import { ReactComponent as IconPSD } from "../../assets/icons/icon-psd.svg";
import { ReactComponent as IconXD } from "../../assets/icons/icon-xd.svg";
import "./Skills.scss";

export default function skills() {
  return (
    <section className="skills">
      <div
        id="Skills"
        className="max-content"
        data-aos="fade-left"
        data-aos-offset="400"
        data-aos-duration="800"
      >
        <h2 className="skills__title">My Skills</h2>
        <div className="skills__traits">
          <div className="skills__traits__item">
            <Skill1 className="skills__traits__icon" />
            <h4>Design & Ideation</h4>
          </div>
          <div className="skills__traits__item">
            <Skill2 className="skills__traits__icon" />
            <h4>Development</h4>
          </div>
          <div className="skills__traits__item">
            <Skill3 className="skills__traits__icon" />
            <h4>Soft Skills</h4>
          </div>
          <div className="skills__traits__item">
            <p>
              Overall Design knowledge for all the stages of a project, from
              early stages of creation of ideas, defining elements, interactions
              and structure.
            </p>
          </div>
          <div className="skills__traits__item">
            <p>
              I focus on creating great responsive interfaces that perform well
            </p>
          </div>
          <div className="skills__traits__item">
            <p>
              Overall design knowledge across all the stages of a project, i can
              help in the early stages of creation of ideas, defining elements
              and appliying good practices.
            </p>
          </div>
          <div className="skills__traits__item">
            <ul className="skills__traits__list">
              <li>Wireframing knowledge</li>
              <li>Strong Typography fundations</li>
              <li>Deep understanding of color use</li>
              <li>
                Diverse technical knowledge about images colors and formats
              </li>
            </ul>
          </div>
          <div className="skills__traits__item">
            <ul className="skills__traits__list">
              <li>Wireframing knowledge</li>
              <li>Strong Typography fundations</li>
              <li>Deep understanding of color use</li>
              <li>
                Diverse technical knowledge about images colors and formats
              </li>
            </ul>
          </div>
          <div className="skills__traits__item">
            <ul className="skills__traits__list">
              <li>Wireframing knowledge</li>
              <li>Strong Typography fundations</li>
              <li>Deep understanding of color use</li>
              <li>
                Diverse technical knowledge about images colors and formats
              </li>
            </ul>
          </div>
          <div className="skills__traits__main-skills">
            <h3 className="desktop-hide">Skills</h3>
            <ul>
              <li>
                <IconHTML /> HTML
              </li>
              <li>
                <IconCSS /> CSS / SASS
              </li>
              <li>
                <IconJS />
                Javascript
              </li>
              <li>
                <IconTS />
                Typescript
              </li>
              <li>
                <IconREACT />
                React
              </li>
              <li>
                <IconNODE />
                Node.js
              </li>
              <li>
                <IconXD />
                Adobe XD
              </li>
              <li>
                <IconPSD />
                Photoshop
              </li>
              <li>
                <IconAI />
                Illustrator
              </li>
              <li>
                <IconFIGMA />
                Figma
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
