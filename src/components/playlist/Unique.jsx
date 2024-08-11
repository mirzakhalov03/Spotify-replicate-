import CardMusic from "../Card_music/CardMusic"
import React, { useEffect, useState } from 'react'
import axios from "../../api";
import "./playlist.scss"




const Unique = () => {
  const [Unique, setUnique] = useState([]);

  const token = localStorage.getItem('access_token');


  useEffect(() => {
    const getUnique = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists', {
          headers: {
            Authorization: `${token}`
          },
          timeout: 10000,
        })
        setUnique(response.data.playlists.items)
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    }

    getUnique()
    
  }, [token]);




  return (
    <div className='playlist max-w-[1200px] mx-auto flex flex-col justify-center items-center'>
        <h2 className=' indent-10 w-full text-[30px] text-white p-5'>Uniquely Yours</h2>
        <div className="wrapper w-full flex flex-wrap gap-8 px-2 ">
            {
                Unique.slice(0, 4).map((mix) => (
                    <CardMusic key={mix.id} mix={mix} />
                ))
            }
        </div>
    </div>
  )
}

export default Unique