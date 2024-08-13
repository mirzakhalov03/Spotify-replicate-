import React from 'react'
import "./nav.scss"
import { NavLink } from 'react-router-dom'
import Home from '../../images/HomeBtn.svg'
import liked from '../../images/likedSongs.svg'
import Logo from '../../images/spotifyLogoCircle.png'

const Nav = () => {
  return (
    <nav className='navigation w-[100%] mx-auto rounded-lg '>
        <NavLink  className={({isActive}) => isActive ? "active nav" : "nav"} to="/"><img src={Home} alt="" /> <span>Home</span></NavLink>
        <img className='logo w-[50px] ' src={Logo} alt="" />
        <NavLink className={({isActive}) => isActive ? "active nav" : "nav"} to="/liked"><img src={liked} alt="" /><span>Liked</span></NavLink>
    </nav>
  )
}

export default Nav