import React, {useState} from 'react'
import {TiChevronLeft} from 'react-icons/ti'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {BsGithub} from 'react-icons/bs'
import './styles/Project.css'

const Project = ({name, desc, backgroundColor, techStack, projImage, liveLink, githubLink, left, top}) => {

  const [expandProject, setExpandProject] = useState(false);

  function expandProjectHandler() {
    setExpandProject(!expandProject);
  }

  return (
    <div className={expandProject ? 'project-container project-expand' : 'project-container'} style={{backgroundColor: backgroundColor, left: left, top: top}}>
      <button className='text-wrapper' style={{backgroundColor: backgroundColor, cursor: expandProject ? 'auto' : 'pointer'}} disabled={expandProject} onClick={() => expandProjectHandler()}>
        <h3>{name}</h3>
      </button>
      <div className={expandProject ? 'project-content visible' : 'project-content hide'}>
        <img className='project-screenshot' src={projImage} alt='project screenshot'/>
        <div className='proj-info'>
          <p style={{margin: '3rem 0'}}>{desc}</p>
          <b>Tech Stack:</b>
          <ul>
            {techStack.map((x, index) => <li key={index}>{x}</li>)}
          </ul>
          <div className='links-container'>
            <a href={liveLink} target='_blank' rel="noreferrer"><HiOutlineExternalLink size={'3rem'}/></a>
            <a href={githubLink} target='_blank' rel="noreferrer"><BsGithub size={'3rem'}/></a>
          </div>
        </div>
      </div>
      <button className={expandProject ? 'close-project-btn' : 'close-project-btn hide'}  onClick={() => expandProjectHandler()}><TiChevronLeft size={'4rem'}/></button>
    </div>
  )
}

export default Project