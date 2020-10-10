import React from "react";
import picture from "../../assets/images/featured_1/Picture.png";
import "./ProjectCard.scss";

const ProjectCard = (props) => {
  return (
    <div className="work__card__featured">
      <div className="work__card__featured__info">
        <span className="work__card__featured__type">Featured project</span>
        <h3 className="work__card__featured__name">Project Name</h3>
        <p className="work__card__featured__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          purus volutpat mollis euismod odio elementum.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Imperdiet purus volutpat mollis
          euismod odio elementum. <br /> <br /> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Imperdiet purus volutpat mollis euismod
          odio elementum.
        </p>
        <div className="work__card__resources">
          <div className="links">
            <button className="button button__primary">Github</button>
            <button className="button button__primary__void">Link</button>
          </div>
          <div className="stack">
            <p className="stack__title">STACK AND TOOLS</p>
            <ul className="stack__list">
              <li>React</li>
              <li>Redux</li>
              <li>Styled Components</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="work__card__featured__image">
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
