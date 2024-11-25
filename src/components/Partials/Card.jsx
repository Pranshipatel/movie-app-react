import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data, title }) => {
  console.log(title)
  return (
    <div className='w-full flex flex-wrap px-10 gap-[4%] bg-[#1F1E24]'>
      {data.map((card, index) => (
        <Link to={`/${card.media_type || title}/details/${card.id}`} className='relative' key={index}>
          <div className="w-[16vw] h-[45vh]  mt-[34%] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]">
            <img className='w-full h-[98%] object-cover' src={`https://image.tmdb.org/t/p/original/${card.backdrop_path || card.profile_path || card.poster_path}`} alt="" />
            <h1 className='text-2xl mt-3 text-white'>
              {card.name || card.title || card.original_name || card.original_title}
            </h1>
          </div>

          {card.vote_average ? (
            <div className='text-white bg-yellow-600 w-[3rem] h-[3rem] flex items-center justify-center rounded-full absolute top-[68%] right-[-8%]'>
              {(card.vote_average * 10).toFixed()}<small className='mb-3'>%</small>
            </div>
          ) : ""}
        </Link>
      ))}
    </div>
  )
}

export default Card
