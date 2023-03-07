import React, {useState} from 'react'
import {TiChevronLeft} from 'react-icons/ti'
import './styles/Project.css'

const Project = ({name, desc, backgroundColor, left, top}) => {

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
        <div className='proj-info'>
          <p>{desc}</p>
          <p>Tech Stack:</p>
          <ul>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      <button className={expandProject ? 'close-project-btn' : 'close-project-btn hide'}  onClick={() => expandProjectHandler()}><TiChevronLeft size={'4rem'}/></button>
    </div>
  )
}

export default Project