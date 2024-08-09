import React from 'react'
import './PlayerBottom.scss'
import Heart from '../../images/heart.svg'
import shuffle from '../../images/shuffle.svg'
import playback from '../../images/playback.svg'
import repeat from '../../images/repeat.svg'
import volume from '../../images/volume.svg'
import play from '../../images/play.svg'
import pause from '../../images/pause.svg'
import playForward from '../../images/playForward.svg'
import queue from '../../images/Queue_xs.svg'
import devices from '../../images/Devices.svg'
import fullscreen from '../../images/fullScreen.svg'

const PlayerBottom = () => {
  return (
    <div className='PlayerBottom flex items-center justify-between w-full h-[90px]'>
        <div className='albumNameImg flex items-center gap-6'>
            <img className='albumImg' src="https://source.unsplash.com/100x100" alt="" />
            <div>
                <h2>Music Name</h2>
                <h2>Artist</h2>
            </div>
            <img className='heart' src={Heart} alt="" />
        </div>
        <div className='playerBtns'>
            <div className="Btns">
                <button><img className='opacity-50' src={shuffle} alt="" /></button>
                <button><img src={playback} alt="" /></button>
                <button><img src={pause} alt="" /></button>
                <button><img src={playForward} alt="" /></button>
                <button><img className='opacity-50' src={repeat} alt="" /></button>
            </div>
            <div className="filler">
                <div className="timePlayed">00:00</div>
                <input type="range" />
                <div className="totalTime">02:30</div>
            </div>
        </div>
        <div className='volume-Extra'>
            <button><img src={queue} alt="" /></button>
            <button><img src={devices} alt="" /></button>
            <button><img src={volume} alt="" /></button>
            <input type="range" name="" id="" />
            <button><img src={fullscreen} alt="" /></button>
        </div>
    </div>
  )
}

export default PlayerBottom