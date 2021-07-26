import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/icons/icon-github.svg";
import { ReactComponent as LinkIcon } from "../../assets/icons/icon-link.svg";
import "./SmallCard.scss";

function SmallCard({ title, repo, url, description, stack }) {
  return (
    <div className="small__card">
      <div className="small__card__header">
        <h4 className="small__card__name">{title}</h4>
        <div className="header-links">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <LinkIcon />
          </a>
        </div>
      </div>
      <div className="small__card__body">
        <p className="small__card__description">{description}</p>
        <ul className="small__card__stack">
          {stack.map(tool => {
            return <li>{tool}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SmallCard;
