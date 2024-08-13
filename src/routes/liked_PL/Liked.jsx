import React from 'react';
import { useSelector } from 'react-redux';
import Sider from '../../components/sider/Sider';
import './liked.scss';
import bigHeart from '../../images/bigHeart.svg';
import playGreen from '../../images/playGreen.svg';
import heartUnfilled from '../../images/heartUnfilled.svg';
import download from '../../images/download.svg';
import options from '../../images/options.svg';
import search from '../../images/SearchBtn.svg';
import LikedTable from './LikedTable';


const Liked = () => {
  const likedSongs = useSelector((state) => state.like); 
  console.log(likedSongs);

  return (
    <div className='w-full flex '>
      <Sider />
      <div className='w-full min-h-screen bg-[rgb(18,18,18)]'>
        <div className="likedFront w-full">
          <div className="liked__wrapper flex items-end ">
            <img className='liked__img' src={bigHeart} alt="" />
            <div className='liked-info'>
              <strong>Public Playlist</strong>
              <p className='likedTitle'>Liked Songs</p>
              <span className='flex gap-5 items-center'>
                <span>{likedSongs.length} songs</span>
              </span>
              <br />
            </div>
          </div>
        </div>
        <div className='flex w-full items-center px-12 justify-between'>
          <div className="likedSongsBtns">
            <button><img style={{ width: '80px', height: '80px', marginTop: '5px' }} src={playGreen} alt="" /></button>
            <button><img style={{ width: '40px', height: '40px' }} src={heartUnfilled} alt="" /></button>
            <button><img style={{ width: '40px', height: '40px' }} src={download} alt="" /></button>
            <button><img src={options} alt="" /></button>
          </div>
          <div className="search_filterBtns">
            <button><img src={search} alt="" /></button>
            <select name="" id="">
              <option value="">Custom order</option>
              <option value="">Custom order</option>
            </select>
          </div>
        </div>
        <LikedTable tracks={likedSongs} /> 
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Liked;
