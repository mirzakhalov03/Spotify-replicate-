import React from 'react'
import HomeBtn from '../../images/HomeBtn.svg'
import SearchBtn from '../../images/SearchBtn.svg'
import Library from '../../images/LibraryBtn.svg'
import AddLibrary from '../../images/AddLibraryBtn.svg'
import LikedSongs from '../../images/LikedSongs.svg'
import SpotifyLogo from '../../images/spotifyLogo.webp'
import { NavLink } from 'react-router-dom'
import './sider.scss'

const Sider = () => {
  return (
    <div className='sider w-[200px]  bg-black'>
        <div className='logo p-3'><img src={SpotifyLogo} alt="" /></div>
        <div className='w-full p-5'>
            <div className='siderSections flex gap-2 items-center'><img src={HomeBtn} alt="" /> <span>Home</span></div>
            <br />
            <div className='siderSections flex gap-2 items-center'><img src={SearchBtn} alt="" /><span>Search</span></div>
            <br />
            <div className='siderSections flex gap-2 items-center'><img src={Library} alt="" /> <span>Your Library</span></div>
            <br />
            <br />
            <div className='siderSections flex gap-2 items-center'><img src={AddLibrary} alt="" /> <span> Create Playlist</span></div>
            <br />
            <NavLink to="/liked" className='siderSections flex gap-2 items-center'><img src={LikedSongs} alt="" /><span> Liked Songs</span></NavLink>
            <br />
            <hr className='opacity-20'/>
        </div>
    </div>
  )
}

export default Sider