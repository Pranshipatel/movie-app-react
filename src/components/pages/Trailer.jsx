import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import NotFound from './NotFound';

const Trailer = ({videoKey}) => {
 
  return videoKey ? (
    <div className="trailer-container h-[99%] flex items-center justify-center flex-col  w-[90vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000000c3]">
      <div className="flex justify-end items-center w-full">
        <Link onClick={() => navigate(-1)} className="ri-arrow-left-line hover:text-[#6556CD]"></Link>
        <Link onClick={() => navigate(-1)} className="ri-arrow-right-line hover:text-[#6556CD]"></Link>
      </div>
      <ReactPlayer 
  url={`https://www.youtube.com/watch?v=${videoKey}`} 
  width="75vw" // Set width to 80% of the viewport width
  height="43vw" // Maintain aspect ratio (16:9) using a proportional height
  controls // Add playback controls
  playing // Start playback automatically (optional)
  style={{ maxWidth: "100%", maxHeight: "100%" }} // Prevent overflow
/>
    </div>
  ): <NotFound/>
}

export default Trailer
