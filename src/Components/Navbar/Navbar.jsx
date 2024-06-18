import React from 'react'
import './Navbar.css'
import menu from '../../assets/menu/menu.png'
import logo from  '../../assets/logo/logo.png'
import search from '../../assets/search/search.png'
import upload from '../../assets/upload/upload.png'
import icon from '../../assets/more/more.png'
import noti from '../../assets/notification/notification.png'
import profile from '../../assets/jack/jack.png'

const Navbar = ({setsidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon'onClick={() => setsidebar(prev => prev===false ?true : false) } src={menu} alt="" />
            <img className='logo' src={logo} alt="" />
        </div>
      
      <div className="nav-middle  flex-div ">
        <div className="search-box flex-div ">
        <input type="text" placeholder='Search.'/>
        <img src={search} alt="" />
        </div>  
      </div>

      <div className="nav-right flex-div">
        <img src={upload}    alt="" />
        <img src={icon}      alt="" />
        <img src={noti}      alt="" />
        <img src={profile} className='user-icon'  alt="" />
      </div>

    </nav>
  )
}

export default Navbar
