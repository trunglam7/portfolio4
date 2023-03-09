import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross1} from 'react-icons/rx'
import Sidebar from './Sidebar'
import './styles/Header.css'

const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  function menuHandler() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <header>
        <h1>Trung Lam</h1>
        <button onClick={() => menuHandler()} className='menu-btn'>{toggleMenu ? <RxCross1 size={'3rem'}/> : <GiHamburgerMenu size={'3rem'}/>}</button>
        <Sidebar toggleMenu={toggleMenu}/>
    </header>
  )
}

export default Header