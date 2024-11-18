import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {
    
  return (
    <div
    style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition:"top 10%",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    }}
    className='w-full h-[50vh] flex justify-end items-start p-[10%] flex-col'
    >
      <h1 className='font-bold text-4xl text-white mb-3 '>
      {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <h3 className='text-white w-[70%] '>{data.overview.slice(0,200)}<Link className='text-blue-400'>  ...more</Link></h3>
      <p className='text-white mt-2 '>
      <i class="text-yellow-600 ri-megaphone-fill"></i> {data.release_date || "No Information"}
      <i class="text-yellow-600 ml-4 ri-album-fill"></i> {data.media_type}
      </p>
      <Link className='text-white mt-3 bg-[#6556CD] py-2 px-3 rounded'>Watch trailer</Link>
    </div>
  )
}

export default Header
