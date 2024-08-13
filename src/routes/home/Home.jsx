import React, { useState, useEffect } from 'react';
import Sider from '../../components/sider/Sider';
import './home.scss';
import HomePlaylist from '../../components/homePlaylist/HomePlaylist';
import PlayerBottom from '../../components/playerBottom/PlayerBottom';
import axios from '../../api';
import TopMixes from '../../components/playlist/TopMixes';
import ForYou from '../../components/playlist/ForYou';
import Recent from '../../components/playlist/Recent';
import Jump from '../../components/playlist/Jump';
import Unique from '../../components/playlist/Unique';
import Nav from '../../components/nav/Nav';

const Home = () => {
  const [playlists, setPlaylists] = useState([]); 
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    const getFeaturedPlaylists = async () => {
      if (!token) return; 

      try {
        const response = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
          headers: {
            Authorization: `${token}`
          },
          timeout: 10000,
        });
        setPlaylists(response.data.playlists.items); 
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };
    getFeaturedPlaylists();
  }, [token]); 

  return (
    <div className='w-full flex relative'>
      <Sider />
      <div className='w-full min-h-screen bg-[rgb(18,18,18)]'>
        <div className="homeFront w-full ">
          <h2 className='homeFrontTitle w-full text-center p-5'>Welcome to Spotify</h2>
          <div className="homePlaylist w-full flex flex-wrap gap-8 p-2">
            {
             
              playlists.slice(0, 6).map((playlist, index) => (
                <HomePlaylist key={index} playlist={playlist} /> 
              ))
            }
          </div>
        </div>
        <div className='ListsInHomePage'>
        <TopMixes />
        
        <ForYou />
        
        <Recent />
        
        <Jump />
        
        <Unique />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <PlayerBottom />
    </div>
  );
};

export default Home;
