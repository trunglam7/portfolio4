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
        {ProjectData.map((x, index) => <Project key={index} name={x.projectName} backgroundColor={x.backgroundColor} left={((index + 1) * 7) + 'rem'}/>)}
    </section>
  )
}

export default Projects