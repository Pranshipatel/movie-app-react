import React from 'react'
import { Link } from 'react-router-dom'
import noimage from "/noimage.jpg"

const Card = ({ data, title }) => {
  return (
    <div className='w-full flex flex-wrap px-10 gap-[4%] bg-[#1F1E24]  overflow-y-auto'>
      {data.map((card, index) => (
        <Link to={`/${card.media_type || title}/details/${card.id}`} className='relative' key={index}>
          <div className="w-[15vw] h-[45vh] mt-[34%] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg overflow-hidden">

            <img
              className='w-full h-[100%] object-cover'
              src={
                card.backdrop_path || card.profile_path || card.poster_path
                  ? `https://image.tmdb.org/t/p/original/${card.backdrop_path || card.profile_path || card.poster_path}`
                  : noimage
              }
              alt={card.name || card.title || 'Image not available'}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h1 className='text-2xl text-white'>
                {card.name || card.title || card.original_name || card.original_title}
              </h1>
              {card.vote_average && (
                <div className='text-white bg-yellow-600 w-[3rem] h-[3rem] flex items-center justify-center rounded-full absolute top-[68%] right-[-8%]'>
                  {(card.vote_average * 10).toFixed()}<small className='mb-3'>%</small>
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Card
