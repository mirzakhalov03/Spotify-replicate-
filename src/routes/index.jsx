import Home from "./home/Home"
import Liked from "./liked_PL/Liked"
import { Navigate, useRoutes } from "react-router-dom"




const RouteController = () => {


  return useRoutes([
    {
        path: "",
        element: <Home/>
    },
    {
        path: "liked",
        element: <Liked/>
    }
  ])
    
  
}

export default RouteController