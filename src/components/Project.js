import React, {useState} from 'react'
import {TiChevronLeft} from 'react-icons/ti'
import './styles/Project.css'

const Project = ({name, desc, backgroundColor, left}) => {

  const [expandProject, setExpandProject] = useState(false);

  function expandProjectHandler() {
    setExpandProject(!expandProject);
  }

  return (
    <div className={expandProject ? 'project-container project-expand' : 'project-container'} style={{backgroundColor: backgroundColor, left: left}}>
      <button className='text-wrapper' style={{backgroundColor: backgroundColor, cursor: expandProject ? 'auto' : 'pointer'}} disabled={expandProject} onClick={() => expandProjectHandler()}>
        <h3>{name}</h3>
      </button>
      <div className={expandProject ? 'project-content visible' : 'project-content hide'}>
        <p>{desc}</p>
        <button className='close-project-btn' onClick={() => expandProjectHandler()}><TiChevronLeft size={'4rem'}/></button>
      </div>
    </div>
  )
}

export default Project