import './cardMusic.scss'
import { NavLink } from 'react-router-dom'


const CardMusic = ({mix}) => {
  // console.log(mix)
  return (
    <NavLink to={`/playlist/${mix.id}`} className='cardMusic bg-[rgba(255,255,255,0.1)] rounded-lg '>
        <img src={mix.images[0].url} alt="" />
        <h3>{mix.name}</h3>
        <p>{mix.description}</p>
    </NavLink>
  )
}

export default CardMusic