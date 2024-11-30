import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

import MovieDetails from '../components/Partials/MovieDetails'
import TvDetails from '../components/Partials/TvDetails'
import PersonDetails from '../components/Partials/PersonDetails'
import Trending from '../components/pages/Trending'
import Popular from '../components/pages/Popular'
import Movie from '../components/pages/Movie'
import Tv from '../components/pages/Tv'
import People from '../components/pages/People'
import Trailer from '../components/pages/Trailer'
import NotFound from '../components/pages/NotFound'

const AppRoutes = () => {
    return (
        <div className='bg-[#1F1E24] overflow-y-hidden'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/trending' element={<Trending />} />
                <Route path='/popular' element={<Popular />} />

                <Route path='/movie' element={<Movie />} />
                    <Route path='/movie/details/:id' element={<MovieDetails />} />
                    <Route path='/movie/details/:id/trailer' element={<Trailer />} />
                    
                

                <Route path='/tv' element={<Tv />} />
                    <Route path='/tv/details/:id' element={<TvDetails />} />
                    <Route path='/tv/details/:id/trailer' element={<Trailer />} />

                <Route path='/people' element={<People />} />
                    <Route path='/people/details/:id' element={<PersonDetails />} />
                
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default AppRoutes
