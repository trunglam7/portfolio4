import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import './styles/Sidebar.css'
const Sidebar = ({toggleMenu}) => {
  return (
    <aside className={toggleMenu ? 'show' : ''}>
        <a href='https://www.linkedin.com/in/trung-lam-8190a0177/' target='_blank' rel="noreferrer"><FaLinkedinIn size={'3rem'}/></a>
        <a href='https://github.com/trunglam7' target='_blank' rel="noreferrer"><FaGithub size={'3rem'}/></a>
        <a href='mailto:trunglam107@gmail.com' target='_blank' rel="noreferrer"><AiOutlineMail size={'3rem'}/></a>
    </aside>
  )
}

export default Sidebar