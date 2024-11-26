import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { asyncloadMovie, removeMovie } from '../store/actions/movieAction';
import Loading from "../../components/Loading"

const MovieDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();
  const {info} = useSelector((state)=> state.movie);
  useEffect(()=>{
    dispatch(asyncloadMovie(id));
    return () => {
      dispatch(removeMovie())
    }
  },[])
  return info ? (
    <div 
    style={{
      background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), 
      url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
      backgroundPosition:"top 10%",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat"
  }}
    className='w-screen h-screen  px-[5%] text-white'>
      {/* part1 : navigation */}
      <nav className='w-full  py-5 flex gap-5 items-center'>
      <Link onClick={() => navigate(-1)} className="ri-arrow-left-line mr-1 hover:text-[#6556CD]"></Link>
      <a target='_blank' href={info.detail.homepage}>
        <i className='ri-external-link-fill'></i>
      </a>
      <a  target='_blank'
       href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
      <i className='ri-earth-fill'></i>
      </a>
      <a  target='_blank'
       href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>
        imdb
      </a>
      </nav>
 
 {/* part2: Poster and details */}
  
  <div>
    <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover'
    src={`https://image.tmdb.org/t/p/original/${
      info.detail.backdrop_path || info.detail.poster_path
      }`} alt="" />

      <div>
        {info.watchproviders && info.watchproviders.flatrate && info.watchproviders.flatrate.map(w) }
      </div>
  </div>

    </div>
  ) : <Loading/>
}

export default MovieDetails
