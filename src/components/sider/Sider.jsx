import React from 'react'
import HomeBtn from '../../images/HomeBtn.svg'
import SearchBtn from '../../images/SearchBtn.svg'
import Library from '../../images/LibraryBtn.svg'
import AddLibrary from '../../images/AddLibraryBtn.svg'
import LikedSongs from '../../images/likedSongs.svg'
import SpotifyLogo from '../../images/spotifyLogo.webp'
import { NavLink } from 'react-router-dom'
import circleLogo from '../../images/spotifyLogoCircle.png'
import './sider.scss'

const Sider = () => {
  return (
    <div className='sider  bg-black'>
        <div className='logo flex items-center justify-center p-3'><img className='fullLogo' src={SpotifyLogo} alt="" /><img className='circleLogo' src={circleLogo} width={50} height={50} alt="" /></div>
        <div className='w-full p-5'>
            <NavLink to="/" className='siderSections flex gap-2 items-center'><img className='w-5' src={HomeBtn} alt="" /> <span>Home</span></NavLink>
            <br />
            <div className='siderSections flex gap-2 items-center'><img className='w-5' src={SearchBtn} alt="" /><span>Search</span></div>
            <br />
            <div className='siderSections flex gap-2 items-center'><img className='w-5' src={Library} alt="" /> <span>Your Library</span></div>
            <br />
            <br />
            <div className='siderSections flex gap-2 items-center'><img className='w-5' src={AddLibrary} alt="" /> <span> Create Playlist</span></div>
            <br />
            <NavLink to="/liked" className='siderSections flex gap-2 items-center'><img className='w-5' src={LikedSongs} alt="" /><span> Liked Songs</span></NavLink>
            <br />
            <hr className='opacity-20'/>
        </div>
    </div>
  )
}

export default Sider