import React from "react";
import ProjectCard from "./ProjectCard";
import SmallCard from "./SmallCard";
import "./Work.scss";

const Work = () => {
  return (
    <section id="Work" className="work">
      <div className="max-content">
        <h2 className="work__title">My Work</h2>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <div className="small-card-container">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
    </section>
  );
};

export default Work;
