import React from "react";
import { ReactComponent as Skill1 } from "../../assets/icons/skill-1.svg";
import { ReactComponent as Skill2 } from "../../assets/icons/skill-2.svg";
import { ReactComponent as Skill3 } from "../../assets/icons/skill-3.svg";
import { ReactComponent as IconHTML } from "../../assets/icons/icon-html.svg";
import { ReactComponent as IconAI } from "../../assets/icons/icon-ai.svg";
import { ReactComponent as IconCSS } from "../../assets/icons/icon-css.svg";
import { ReactComponent as IconFIGMA } from "../../assets/icons/icon-figma.svg";
import { ReactComponent as IconJS } from "../../assets/icons/icon-javascript.svg";
// import { ReactComponent as IconTS } from "../../assets/icons/icon-typescript.svg";
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
          <div className="skills__traits__item-1">
            <Skill1 className="skills__traits__icon" />
            <h4>Design</h4>
          </div>
          <div className="skills__traits__item-4">
            <Skill2 className="skills__traits__icon" />
            <h4>Development</h4>
          </div>
          <div className="skills__traits__item-7">
            <Skill3 className="skills__traits__icon" />
            <h4>Soft </h4>
          </div>
          <div className="skills__traits__item-2">
            <p>
              Strong design foundations applied to elements and interactions in
              a smart and aesthetic way
            </p>
          </div>
          <div className="skills__traits__item-5">
            <p>
              Focus on performance, responsive, intuitive and dynamic interfaces
              while applying best practices
            </p>
          </div>
          <div className="skills__traits__item-8">
            <p>
              Multi-disciplinary, innovaticve, creative and analitical, Self
              learner, curious and friendly
            </p>
          </div>
          <div className="skills__traits__item-3">
            <ul className="skills__traits__list">
              <li>Wireframing knowledge</li>
              <li>Strong Typography fundations</li>
              <li>Deep understanding of color use</li>
              <li>
                Diverse technical knowledge about images colors and formats
              </li>
            </ul>
          </div>
          <div className="skills__traits__item-6">
            <ul className="skills__traits__list">
              <li>App / Web development</li>
              <li>Best practices / Methodologies</li>
              <li>Semantic Code</li>
              <li>CLI / GIT / CVS</li>
            </ul>
          </div>
          <div className="skills__traits__item-9">
            <ul className="skills__traits__list">
              <li>Good Communication skills</li>
              <li>I welcome challenge</li>
              <li>Good stress management</li>
              <li>Empathic and a team player</li>
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
              {/* <li>
                <IconTS />
                Typescript
              </li> */}
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
