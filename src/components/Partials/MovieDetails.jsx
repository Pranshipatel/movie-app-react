import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { asyncloadMovie, removeMovie } from '../store/actions/movieAction';
import Loading from "../pages/Loading"
import HorizontalCards from './HorizontalCards';
import Trailer from '../pages/Trailer';

const MovieDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();
  const {info} = useSelector((state)=> state.movie);
  const [showTrailer, setShowTrailer] = useState(false);
  useEffect(()=>{
    dispatch(asyncloadMovie(id));
    return () => {
      dispatch(removeMovie())
    }
  },[])
  const trailerKey = info?.videos?.key;
  console.log(trailerKey)
  return info ? (
    <div 
    style={{
      background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), 
      url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
      backgroundPosition:"top 10%",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat"
  }}
    className='w-screen relative h-full  px-[5%] text-white'>
      {/* part1 : navigation */}
      <nav className='w-full py-5 flex gap-5 items-center justify-between'>
        <Link onClick={() => navigate(-1)} className="ri-arrow-left-line mr-1 hover:text-[#6556CD]"></Link>
        <div className='flex gap-5'>
          <a target='_blank' href={info.detail.homepage}>
            <i className='ri-external-link-fill'></i>
          </a>
          <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} style={{color: '#6556CD'}}>
            <i className='ri-earth-fill'></i>
          </a>
          <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`} style={{color: '#6556CD'}}>
            imdb
          </a>
        </div>
      </nav>

      {/* part2: Poster and details */}
      <div className='w-full h-[80%] flex py-10'>
        <div className='w-[30%] h-full flex flex-col items-center'>
          <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] w-[20vw] object-cover rounded-lg'
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.backdrop_path || info.detail.poster_path
            }`} alt="" />
          <div className='mt-10 w-fit flex flex-wrap gap-2'>
            {info.watchproviders &&
              info.watchproviders.buy &&
              info.watchproviders.buy.map((w) => (
                  <img key={w.provider_id} className="w-10 h-10 bg-black text-white rounded-full" 
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} 
                    alt={`${w.provider_name} Logo`} />
                ))}
            {info.watchproviders &&
             info.watchproviders.rent &&
             info.watchproviders.rent.map((w)=>(
              <img className='w-10 h-10 bg-red-300 rounded-full'
              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
             ))}
          </div>
        </div>
        <div className='w-[70%] h-[100%] flex flex-col items-start'>
           <h1 className='text-5xl font-bold mb-4'>{info.detail.title} <span className='text-4xl'>({info.detail.release_date.split('-')[0]})</span></h1>
           <h4 className='mb-4'>rating -{info.detail.vote_average} ● {info.detail.runtime}mins</h4>
           <div className='flex gap-4 mb-4'>
            <h2>{info.detail.spoken_languages.map((w)=>(
             w.english_name
           )).join(" | ")}</h2>
            ●
            <h2>{info.detail.genres.map((w)=>(
             w.name
           )).join(" | ")}</h2>
           </div>
           <p className='mb-4'>{info.detail.overview}</p>
           <button
        className="bg-[#6556CD] px-5 py-3 rounded-full text-white font-bold"
        onClick={() => setShowTrailer(true)} // Set state to show trailer
      >
        Watch Now
      </button> 
      {showTrailer && <Trailer videoKey={trailerKey} />}
        </div>
      </div>

        <HorizontalCards
         data={
         info.recommendations.length>0
         ? info.recommendations 
         : info.similar
         }
        />
  
       
      
    </div>
  ) : <Loading/>
}

export default MovieDetails
