import React from 'react'
import Project from './Project'
import ProjectData from '../Data'

import './styles/Projects.css'
const Projects = () => {
  return (
    <section className='projects-container'>
        <div className='text-wrapper'>
            <h2>Projects</h2>
        </div>
        {
          ProjectData.map((x, index) => <Project key={index}
          name={x.projectName}
          desc={x.projectDesc}
          backgroundColor={x.backgroundColor}
          techStack = {x.techStack}
          projImage = {x.projImage}
          liveLink = {x.liveLink}
          githubLink = {x.githubLink}
          left={((index + 1) * 7) + 'rem'}
          top={((index + 1) * 7) + 'rem'}/>)
        }
    </section>
  )
}

export default Projects