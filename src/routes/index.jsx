import Home from "./home/Home"
import Liked from "./liked_PL/Liked"
import { useRoutes } from "react-router-dom"
import Playlist from "./playlist/Playlist"




const RouteController = () => {


  return useRoutes([
    {
        path: "",
        element: <Home/>
    },
    {
        path: "liked",
        element: <Liked/>
    },
    {
        path: "/playlist/:id",
        element: <Playlist/>
    }
  ])
    
  
}

export default RouteController