import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import SmallCard from "./SmallCard";
import "./Work.scss";

export class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/brunellaa/repos")
      .then(response => response.json())
      .then(data => this.setState({ projects: data }));
  }

  render() {
    const { projects } = this.state;
    return (
      <section id="Work" className="work">
        <div
          className="max-content"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="400"
        >
          <h2 className="work__title">Featured Projects</h2>
          <ProjectCard />
          <h3 className="work__subtitle">Other Projects</h3>
          <div className="small-card-container">
            {projects.map(({ id, ...otherInfo }) => {
              return <SmallCard key={id} {...otherInfo} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
