import React from "react";
import ProjectCard from "./ProjectCard";
import SmallCard from "./SmallCard";
import "./Work.scss";

const Work = () => {
  return (
    <section id="Work" className="work">
      <div
        className="max-content"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="400"
      >
        <h2 className="work__title">Featured Work</h2>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <h3 className="work__subtitle">Other Projects</h3>
        <div className="small-card-container">
          <SmallCard />
          <SmallCard />
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
