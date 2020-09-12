import React from "react";
import { ReactComponent as Icon1 } from "../../assets/icons/ux.svg";
import "./Skills.scss";

export default function skills() {
  return (
    <section className="skills">
      <div className="max-content">
        <hr className="skills__line" />
        <h3 className="skills__title">Skills</h3>
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
        </div>
        <div className="skills__grid">
          <div className="skills__grid__front">f</div>
          <div className="skills_grid__design">d</div>
        </div>
      </div>
    </section>
  );
}
