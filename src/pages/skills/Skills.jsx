import React from "react";
import { ReactComponent as Icon1 } from "../../assets/icons/feature-responsive.svg";
import "./Skills.scss";

export default function skills() {
  return (
    <section className="skills">
      <div id="Skills" className="max-content">
        <h2 className="skills__title">My Skills</h2>
        <div className="skills__traits">
          <div className="skills__traits__1">
            <Icon1 className="skills__traits__icon" />
            <h4>Responsive Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="skills__traits__2">
            <Icon1 className="skills__traits__icon" />
            <h4>Dynamic UI / UX</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="skills__traits__3">
            <Icon1 className="skills__traits__icon" />
            <h4>Semantic Code</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="skills__traits__4">
            <Icon1 className="skills__traits__icon" />
            <h4>Performance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="skills__traits__5">
            <Icon1 className="skills__traits__icon" />
            <h4>Performance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="skills__traits__6">
            <Icon1 className="skills__traits__icon" />
            <h4>Performance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="skills__traits__main-skills">
            <h3 className="desktop-hide">Skills</h3>
            <ul>
              <li className="html">HTML</li>
              <li className="css">CSS / SASS</li>
              <li className="js">Javascript</li>
              <li className="ts">Typescript</li>
              <li className="react">React</li>
              <li className="node">Node.js</li>
              <li className="">git</li>
              <li className="vscode">VSCode</li>
              <hr />
              <li className="xd">Adobe XD</li>
              <li className="psd">Photoshop</li>
              <li className="ai">Illustrator</li>
              <li className="figma">Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
