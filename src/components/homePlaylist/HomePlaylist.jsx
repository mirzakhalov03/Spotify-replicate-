import React from 'react';
import { NavLink } from 'react-router-dom';
import './homePlaylist.scss'

const HomePlaylist = ({ playlist }) => {
  return (
    <NavLink  to={`/playlist/${playlist.id}`} className='featuredPlaylist w-[400px] flex items-center rounded-xl gap-4 bg-[rgba(255,255,255,0.2)] overflow-hidden'>
      <img 
        src={playlist.images[0]?.url} 
        style={{ objectFit: 'cover', width: '100px', height: '100%' }} 
        alt={playlist.name} 
      />
      <div className='p-5'>{playlist.name}</div> 
    </NavLink>
  );
};

export default HomePlaylist;
