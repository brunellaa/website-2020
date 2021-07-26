import React from 'react'
import ProjectCard from './ProjectCard'
// import SmallCard from './SmallCard'
import { featuredWork } from '../../data/featuredWork'
// import { otherProjects } from '../../data/otherProjects'
import './Work.scss'

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
        {featuredWork.map(({ id, ...allProps }) => {
          return <ProjectCard key={id} {...allProps} />
        })}
        {/* <h3 className="work__subtitle">Other Projects</h3>
        <div className="small-card-container">
          {otherProjects.map(({ id, ...otherInfo }) => {
            return <SmallCard key={id} {...otherInfo} />;
          })}
        </div> */}
      </div>
    </section>
  )
}

export default Work
