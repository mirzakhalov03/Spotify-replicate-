import './App.scss'
import PlayerBottom from './components/playerBottom/PlayerBottom'
import RouteController from "./routes"
import { useEffect, useState } from 'react'

function App() {
  const ID = import.meta.env.VITE_CLIENT_ID
  const SECRET = import.meta.env.VITE_CLIENT_SECRET


  useEffect(() => {
    const getToken = async () => {
      try{
        const response = await fetch('https://accounts.spotify.com/api/token', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${ btoa( ID + ':' + SECRET ) }`
          },
          body: 'grant_type=client_credentials'
        }
        )
        const auth = await response.json()
        localStorage.setItem('access_token', `${auth.token_type} ${auth.access_token}`)
      }
      catch(err) {
        console.error('Error fetching token:', err);
      }
    }

    getToken()
  }, [])

  return (
    <>
      <RouteController/>
      <PlayerBottom/>
    </>
  )
}

export default App
