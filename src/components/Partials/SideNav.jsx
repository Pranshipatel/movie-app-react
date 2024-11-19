import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
    return (
        <div className='border-r-2 border-zinc-300 w-[20%] h-full'>
            <h1 className='text-2xl text-white font-bold p-4 '>
                <i class="text-[#6556CD] ri-tv-fill mr-2 "></i>
                <span>Movie App</span>
            </h1>
            <nav className='text-zinc-400 p-5 flex flex-col gap-3'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>
                    New Feeds
                </h1>

                <Link to='/trending' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="mr-2 ri-fire-fill"></i> Trending
                </Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="mr-2 ri-bard-fill"></i>Popular
                </Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="mr-2 ri-clapperboard-fill"></i> Movies
                </Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="mr-2 ri-tv-2-fill"></i>TV shows
                </Link>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="mr-2 ri-team-fill"></i> People
                </Link>

            </nav>

            <nav className='text-zinc-400 p-5 flex flex-col ' >
                <hr className=' h-[0.1rem] mb-5' />
                <h1 className='text-xl font-semibold text-white p-1 mb-4'>Website Information</h1>
                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="mr-2 ri-information-fill"></i> About
                </Link>

                <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
                    <i class="mr-2 ri-phone-fill"></i> Contact Us
                </Link>

            </nav>
        </div>

    )
}

export default SideNav
