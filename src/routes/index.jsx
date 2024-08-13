import Home from "./home/Home"
import Liked from "./liked_PL/Liked"
import { useRoutes } from "react-router-dom"
import Playlist from "./playlist/Playlist"
import Search from "./search/Search"




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
    },
    {
      path: "/search",
      element: <Search/>
    }
  ])
    
  
}

export default RouteController