import React from 'react'
import chillmix from '../../images/chillMix.png'

const HomePlaylist = () => {
  return (
    <div className=' w-[400px] flex  items-center rounded-xl gap-4 bg-[rgba(255,255,255,0.2)] overflow-hidden'>
        {/* <div className='img w-[60px] h-[60px] bg-black'></div> */}
        <img src={chillmix} style={{objectFit: 'cover'}} alt="" />
        <div className='p-5'>Chill Mix</div>
    </div>
  )
}

export default HomePlaylist