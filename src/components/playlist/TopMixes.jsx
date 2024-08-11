import CardMusic from "../Card_music/CardMusic"
import React, { useEffect, useState } from 'react'
import axios from "../../api";
import "./playlist.scss"


const TopMixes = () => {
  const [topMixes, setTopMixes] = useState([]);

  const token = localStorage.getItem('access_token');


  useEffect(() => {
    const getTopMixes = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/browse/categories/toplists/playlists', {
          headers: {
            Authorization: `${token}`
          },
          timeout: 10000,
        })
        setTopMixes(response.data.playlists.items)
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    }

    getTopMixes()
    
  }, [token]);




  return (
    <div className='playlist max-w-[1200px] mx-auto flex flex-col justify-center items-center'>
        <h2 className=' w-full text-[30px] indent-12 text-white p-5'>Your Top Mixes</h2>
        <div className="wrapper w-full mx-auto flex flex-wrap gap-8 px-2 ">
            {
                topMixes.slice(0, 4).map((mix) => (
                    <CardMusic key={mix.id} mix={mix} />
                ))
            }
        </div>
    </div>
  )
}

export default TopMixes