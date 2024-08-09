import React from 'react'
import Sider from '../../components/sider/Sider'
import './home.scss'
import HomePlaylist from '../../components/homePlaylist/HomePlaylist'
import Playlist from '../../components/playlist/Playlist'
import PlayerBottom from '../../components/playerBottom/PlayerBottom'

const Home = () => {
  return (
      <div className='w-full flex relative'>
        <Sider/>
        <div className=' w-full min-h-screen bg-[rgb(18,18,18)]'>
          <div className="homeFront w-full h-[450px] b">
            <h2 className='homeFrontTitle w-full text-center p-5'>Welcome to Spotify</h2>
            <div className="homePlaylist w-full flex flex-wrap gap-8 p-5 ">
              <HomePlaylist/>
              <HomePlaylist/>
              <HomePlaylist/>
              <HomePlaylist/>
              <HomePlaylist/>
              <HomePlaylist/>
            </div>
          </div>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div>
        <PlayerBottom/>
      </div>
  )
}

export default Home