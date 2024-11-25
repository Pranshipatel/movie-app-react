import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Loading from '../components/Loading'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import Movie from '../components/Movie'
import Tv from '../components/Tv'
import People from '../components/People'
import MovieDetails from '../components/Partials/MovieDetails'
import TvDetails from '../components/Partials/TvDetails'
import PersonDetails from '../components/Partials/PersonDetails'

const AppRoutes = () => {
    return (
        <div className='bg-[#1F1E24] w-screen h-screen flex'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/trending' element={<Trending />} />
                <Route path='/popular' element={<Popular />} />

                <Route path='/movie' element={<Movie />} />
                    <Route path='/movie/details/:id' element={<MovieDetails />} />
                

                <Route path='/tv' element={<Tv />} />
                    <Route path='/tv/details/:id' element={<TvDetails />} />
                

                <Route path='/people' element={<People />} />
                    <Route path='/people/details/:id' element={<PersonDetails />} />
                

            </Routes>
        </div>
    )
}

export default AppRoutes
