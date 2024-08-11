import React, { useEffect } from 'react';
import Sider from '../../components/sider/Sider';
import Table from '../../components/table/Table';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import playGreen from '../../images/playGreen.svg';
import heartUnfilled from '../../images/heart_XS.svg';
import download from '../../images/download.svg';
import options from '../../images/options.svg';
import search from '../../images/searchBtn.svg';
import { useDispatch } from 'react-redux';
import { SET_MUSIC_LIST } from '../../redux/actions/actions';
import "./playlist.scss";

const Playlist = () => {
  const { id } = useParams();
  const [data] = useFetch(`/playlists/${id}`);
  const dispatch = useDispatch();
  
  const tracks = data?.tracks?.items;

  useEffect(() => {
    if (tracks && tracks.length > 0) {
      dispatch({ type: SET_MUSIC_LIST, payload: tracks });
    } 
  }, [tracks, dispatch]);

  return (
    <div className='w-full flex '>
      <Sider />
      <div className=' w-full min-h-screen bg-[rgb(18,18,18)]'>
        <div className="likedFront w-full">
          <div className="liked__wrapper flex items-end ">
            <img className='liked__img' src={data?.images[0]?.url} alt="" />
            <div className='liked-info'>
              <strong>Public Playlist</strong>
              <p className='likedTitle'>{data?.name}</p>
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
            <select>
              <option value="">Custom order</option>
              <option value="topRated">Top Rated</option>
              <option value="MostPlayed">Most Played</option>
            </select>
          </div>
        </div>
        <Table tracks={tracks} />
      </div>
    </div>
  );
};

export default Playlist;
