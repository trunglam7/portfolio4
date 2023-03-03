import React, {useState} from 'react'
import './styles/Project.css'

const Project = ({name, backgroundColor, left}) => {

  const [expandProject, setExpandProject] = useState(false);

  function expandProjectHandler() {
    setExpandProject(!expandProject);
  }

  return (
    <div className={expandProject ? 'project-container project-expand' : 'project-container'} style={{backgroundColor: backgroundColor, left: left}}>
      <button className='text-wrapper' style={{backgroundColor: backgroundColor, cursor: expandProject ? 'auto' : 'pointer'}} disabled={expandProject} onClick={() => expandProjectHandler()}>
        <h3>{name}</h3>
      </button>
    </div>
  )
}

export default Project