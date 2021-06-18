import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({
  id,
  title,
  type,
  url,
  repo,
  description,
  stack,
  picture,
  accent,
}) => {
  return (
    <div className={`work__card__featured work__card__featured__${accent}`}>
      <div className="work__card__featured__info">
        <span className="work__card__featured__type">{type}</span>
        <h3 className="work__card__featured__name">{title}</h3>
        {description.map((item, i) => {
          return (
            <p className="work__card__featured__description" key={i}>
              {item}
            </p>
          );
        })}
        <div className="work__card__resources">
          <div className="links">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button__primary"
            >
              Live Website
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="button button__primary__void"
            >
              Repository
            </a>
          </div>
          <div className="stack">
            <p className="stack__title">STACK AND TOOLS</p>
            <ul className="stack__list">
              {stack.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="work__card__featured__image">
        <img src={picture} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
