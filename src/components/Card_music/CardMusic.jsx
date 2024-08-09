import React from 'react'
import chillmix from '../../images/chillMix.png'
import './cardMusic.scss'

const CardMusic = () => {
  return (
    <div className='cardMusic w-[225px] h-[325px] bg-[rgba(255,255,255,0.1)] rounded-lg p-4'>
        <img src={chillmix} alt="" />
        <h3>Folk & Acoustic...</h3>
        <p>Canyon City, Crooked Still, Gregory Alan...</p>
    </div>
  )
}

export default CardMusic