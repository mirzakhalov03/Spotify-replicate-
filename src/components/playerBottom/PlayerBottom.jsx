import React, { useState, useEffect } from 'react';
import './PlayerBottom.scss';
import Heart from '../../images/heart.svg';
import unfilledHeart from '../../images/heartUnfilled.svg';
import shuffleIcon from '../../images/shuffle.svg';
import playback from '../../images/playback.svg';
import repeatIcon from '../../images/repeat.svg';
import volume from '../../images/volume.svg';
import play from '../../images/play.svg';
import pause from '../../images/pause.svg';
import playForward from '../../images/playForward.svg';
import queue from '../../images/Queue_xs.svg';
import devices from '../../images/Devices.svg';
import fullscreen from '../../images/fullScreen.svg';
import { useSelector, useDispatch } from 'react-redux';
import musicPlaceholder from "../../images/spotifyMusic_placeholder.png";
import { LIKE, DISLIKE, SET_MUSIC_DATA } from '../../redux/actions/actions';

const PlayerBottom = () => {
  const dispatch = useDispatch();
  const trackData = useSelector((state) => state.trackData);
  const trackList = useSelector((state) => state.trackList);
  const likedItems = useSelector((state) => state.like);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(1); 
  const [isShuffle, setIsShuffle] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

  const isLiked = likedItems.some((item) => item.id === trackData?.id);

  useEffect(() => {
    if (audio) {
      audio.pause(); 
    }

    const newAudio = new Audio(trackData?.preview_url);
    setAudio(newAudio);
    setCurrentTime(0);
    setIsPlaying(true); 

    newAudio.volume = volumeLevel; 
    newAudio.play(); 
  }, [trackData]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener('timeupdate', updateCurrentTime);
      audio.addEventListener('ended', handleTrackEnd);
      return () => {
        audio.removeEventListener('timeupdate', updateCurrentTime);
        audio.removeEventListener('ended', handleTrackEnd);
      };
    }
  }, [audio]);

  const updateCurrentTime = () => {
    setCurrentTime(audio.currentTime);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const seekTime = event.target.value;
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
    if (seekTime === audio.duration) {
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolumeLevel(newVolume);
    if (audio) {
      audio.volume = newVolume;
    }
  };

  const handlePlayForward = () => {
    const currentIndex = trackList.findIndex(track => track.id === trackData.id);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= trackList.length) {
      nextIndex = 0;
    }
    dispatch({ type: SET_MUSIC_DATA, payload: trackList[nextIndex] });
  };

  const handlePlayBackward = () => {
    const currentIndex = trackList.findIndex(track => track.id === trackData.id);
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = trackList.length - 1;
    }
    dispatch({ type: SET_MUSIC_DATA, payload: trackList[prevIndex] });
  };

  const handleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const handleLoop = () => {
    setIsLoop(!isLoop);
  };

  const handleTrackEnd = () => {
    if (isLoop) {
      audio.currentTime = 0;
      audio.play();
    } else if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * trackList.length);
      dispatch({ type: SET_MUSIC_DATA, payload: trackList[randomIndex] });
    } else {
      handlePlayForward();
    }
  };

  const handleLike = () => {
    if (isLiked) {
      const updatedLikes = likedItems.filter((item) => item.id !== trackData.id);
      localStorage.setItem('likedItems', JSON.stringify(updatedLikes));
      dispatch({ type: DISLIKE, payload: trackData.id });
    } else {
      dispatch({ type: LIKE, payload: trackData });
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const formattedCurrentTime = formatTime(currentTime);

  return (
    <div className="PlayerBottom flex items-center justify-between w-full ">
      <div className="albumNameImg flex items-center gap-6">
        <img
          className="albumImg"
          src={trackData?.album?.images[0]?.url || musicPlaceholder}
          alt=""
        />
        <div>
          <h2 className='musicName'>{trackData?.name || 'Music Name'}</h2>
          <h2 className="artist text-[#b3b3b374]">{trackData?.artists?.[0]?.name || 'Artist'}</h2>
        </div>
        <img 
          className="heart" 
          src={isLiked ? Heart : unfilledHeart} 
          alt="Like/Unlike" 
          onClick={handleLike} 
        />
      </div>
      <div className="playerBtns">
        <div className="Btns">
          <button onClick={handleShuffle}>
            <img className={`opacity-50 ${isShuffle ? 'active' : ''}`} src={shuffleIcon} alt="Shuffle" />
          </button>
          <button onClick={handlePlayBackward}>
            <img src={playback} alt="Backward" />
          </button>
          <button onClick={handlePlayPause}>
            <img src={isPlaying ? pause : play} alt="Play/Pause" />
          </button>
          <button onClick={handlePlayForward}>
            <img src={playForward} alt="Forward" />
          </button>
          <button onClick={handleLoop}>
            <img className={`opacity-50 ${isLoop ? 'active' : ''}`} src={repeatIcon} alt="Loop" />
          </button>
        </div>
        <div className="filler">
          <div className="timePlayed">{formattedCurrentTime}</div>
          <input
          className='progress'
            type="range"
            min="0"
            max="29" 
            value={currentTime}
            onChange={handleSeek}
          />
          <div className="totalTime">00:29</div> 
        </div>
      </div>
      <div className="volume-Extra">
        <button className='queue'>
          <img src={queue} alt="Queue" />
        </button>
        <button className='devices'>
          <img src={devices} alt="Devices" />
        </button>
        <button>
          <img src={volume} alt="Volume" />
        </button>
        <input
        className='volume verticalVolume'
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volumeLevel}
          onChange={handleVolumeChange}
        />
        <button className='fullscreen'>
          <img src={fullscreen} alt="Fullscreen" />
        </button>
      </div>
    </div>
  );
};

export default PlayerBottom;
