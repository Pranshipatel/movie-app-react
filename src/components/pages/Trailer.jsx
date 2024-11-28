import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'

const Trailer = () => {
   const {pathname} = useLocation();
   const ytVideo = useSelector((state)=>state.movie.info.videos)
   console.log(pathname,ytVideo)
  return (
    <div className=' h-screen w-screen text-green-500'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${"hey"}`}/>
    </div>
  )
}

export default Trailer
