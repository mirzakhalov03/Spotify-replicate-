import CardMusic from "../Card_music/CardMusic"

const Playlist = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex flex-col justify-center items-center'>
        <h2 className=' w-full text-[30px] text-white p-5'>Your Top Mixes</h2>
        <div className=" w-full flex flex-wrap gap-8 p-5 ">
            <CardMusic/>
            <CardMusic/>
            <CardMusic/>
            <CardMusic/>
        </div>
    </div>
  )
}

export default Playlist