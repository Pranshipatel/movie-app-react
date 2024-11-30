import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalCards = ({data}) => {
  
  return (
        
      <div className="w-full flex overflow-x-auto gap-4 mb-8 p-8 bg-zinc-800 rounded-lg shadow-lg">
         {data.length > 0 ? data.map((item, index) => (
             <Link to={`/${item.media_type}/details/${item.id}`} key={index} className="min-w-[20%] flex flex-col gap-4 bg-zinc-700 text-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out hover:scale-105">
                <img className='w-full object-cover h-[60%]' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`} alt="" />
                <div className="flex flex-col gap-2">
                  <h1 className='text-xl font-bold'>{item.title || item.name || item.original_name || item.original_title}</h1>
                  <p className='text-sm'>{item.overview.slice(0, 100)}<Link className='text-blue-500 hover:text-blue-700'> ...more</Link></p>
                </div>
            </Link>
         )) : <h1 className="text-white text-center">Nothing to show</h1>} 
      </div>
  )
}

export default HorizontalCards
