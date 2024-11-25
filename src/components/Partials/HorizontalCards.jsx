import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalCards = ({data , func}) => {
  return (
        
      <div className="card  w-[100%] flex h-[35vh]  overflow-x-auto gap-3 mb-5 p-5">
         {data.map((data,index)=>(
            
            <Link to={`/${data.media_type}/details/${data.id}`}
            key={index}
             className='min-w-[15%]  flex  flex-col gap-2 bg-zinc-900 text-white rounded-sm overflow-hidden'>
                <img className='w-full object-cover h-[50%]' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`} alt="" />
                <h1 className='text-lg ml-1 font-semibold'>{
                data.title ||
                data.name ||
                data.original_name ||
                data.original_title
            }</h1>
            <p className='ml-1'>{data.overview.slice(0,70)}<Link className='text-blue-300' > ...more</Link></p>
            </Link>
         ))}
      </div>
  )
}

export default HorizontalCards
