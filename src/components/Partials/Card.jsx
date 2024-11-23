import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data, title }) => {
  return (
    <div className='w-full flex flex-wrap px-10 gap-[4%] bg-[#1F1E24]'>
      {data.map((card, index) => (
        <Link className='relative' key={index}>
          <div className="w-[16vw] h-[45vh]  mt-[34%] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]">
            <img className='w-full h-[98%] object-cover' src={`https://image.tmdb.org/t/p/original/${card.backdrop_path || card.profile_path || card.poster_path}`} alt="" />
            <h1 className='text-2xl mt-3 text-white'>
              {card.name || card.title || card.original_name || card.original_title}
            </h1>
          </div>

          {card.vote_average ? (
            <div className='text-white'>{(card.vote_average * 10).toFixed()}</div>
          ) : ""}
        </Link>
      ))}
    </div>
  )
}

export default Card
