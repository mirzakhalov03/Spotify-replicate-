import React from 'react'
import chillmix from '../../images/chillMix.png'
import time from '../../images/time.svg'
import './table.scss'

const Table = () => {
    const data = [
        {
            id: 1,
            cover: `${chillmix}`,
            music_name: 'Play It Safe',
            artist: 'Julia Wolf',
            album: 'Play It Safe',
            duration: '2:30',
            liked: true
        },
        {
            id: 2,
            cover: `${chillmix}`,
            music_name: 'Play It Safe',
            artist: 'Julia Wolf',
            album: 'Play It Safe',
            duration: '2:30',
            liked: false
        },
        {
            id: 3,
            cover: `${chillmix}`,
            music_name: 'Play It Safe',
            artist: 'Julia Wolf',
            album: 'Play It Safe',
            duration: '2:30',
            liked: true
        }
    ]


  return (
    <div className='table__container'>
        <table>
        <thead>
            <tr>
                <th >#</th>
                <th >Title</th>
                <th >Album</th>
                <th ><img src={time} alt="" /></th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className='flex gap-3' ><img className='w-[40px] h-[40px] rounded-xl' src={item.cover} alt="" /> <span className='flex flex-col'>{item.music_name} <span className='text-[#b3b3b374]'>{item.artist}</span></span></td>
                        <td>{item.album}</td>
                        <td>{item.duration}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </div>
  )
}

export default Table