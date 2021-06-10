import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/icons/icon-github.svg";
import { ReactComponent as LinkIcon } from "../../assets/icons/icon-link.svg";
import "./SmallCard.scss";

function SmallCard({ name, description }) {
  return (
    <div className="small__card">
      <div className="small__card__header">
        <h4 className="small__card__name">{name}</h4>
        <div className="header-links">
          <GithubIcon />
          <LinkIcon />
        </div>
      </div>
      <div className="small__card__body">
        <p className="small__card__description">{description}</p>
        <ul className="small__card__stack">
          <li>REACT</li>
          <li>Node</li>
          <li>styled components</li>
        </ul>
      </div>
    </div>
  );
}

export default SmallCard;
