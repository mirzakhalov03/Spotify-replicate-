import CardMusic from "../Card_music/CardMusic"
import React, { useEffect, useState } from 'react'
import axios from "../../api";
import "./playlist.scss"




const ForYou = () => {
  const [forYou, setForYou] = useState([]);

  const token = localStorage.getItem('access_token');


  useEffect(() => {
    const getForYou = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists', {
          headers: {
            Authorization: `${token}`
          },
          timeout: 10000,
        })
        setForYou(response.data.playlists.items)
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    }

    getForYou()
    
  }, [token]);




  return (
    <div className='playlist max-w-[1200px] mx-auto flex flex-col justify-center items-center'>
        <h2 className='indent-10 w-full text-[30px] text-white p-5'>Made For You</h2>
        <div className="wrapper w-full flex flex-wrap gap-8 px-2 ">
            {
                forYou.slice(0, 4).map((mix) => (
                    <CardMusic key={mix.id} mix={mix} />
                ))
            }
        </div>
    </div>
  )
}

export default ForYou