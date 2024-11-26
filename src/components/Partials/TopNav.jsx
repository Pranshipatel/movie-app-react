import axios from '../../utils/axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
    const [query, setquery] = useState("")
    const [search, setsearch] = useState([])  // Initialize as an empty array

    const GetSearch = async () => {
        try {
            const {data} = await axios.get(`/search/multi?query=${query}`)
            console.log(data)
            setsearch(data.results || []) // Ensure we set an empty array if results are undefined or null
        } catch (error) {
            console.log("Error : ", error)
            setsearch([]) // Optionally reset to an empty array if an error occurs
        }
    }

    useEffect(() => {
        if (query.length > 0) {
            GetSearch()
        } else {
            setsearch([])  // Reset search when query is cleared
        }

    }, [query])

    return (
        <div className='w-full h-[10vh] relative flex justify-start items-center ml-[20%]'>
            <i className="text-zinc-400 text-2xl ri-search-line"></i>
            <input
                onChange={(e) => setquery(e.target.value)}
                value={query}
                className='w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent'
                type="text"
                placeholder='Search anything'
            />
            {query.length > 0 && (
                <i onClick={() => setquery("")} className="text-zinc-400 text-3xl ri-close-fill"></i>
            )}

            {query.length > 0 && (
                <div className='absolute w-[60%] max-h-[50vh] bg-zinc-200 top-[90%]  overflow-auto rounded'>
                    {search.length > 0 ? (
                        search.map((s, i) => (
                            <Link to={`/${s.media_type}/details/${s.id}`} key={i} className='hover:text-black hoverbg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-between items-center border-b-2 border-zinc-100'>
                                <span>{s.name || s.title || s.original_name || s.original_title}</span>
                                <img 
                                className='w-[10vh] h-[10vh] object-cover rounded'
                                src={`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`} />
                            </Link>
                        ))
                    ) : (
                        <div className="text-center text-zinc-500">No results found</div>
                    )}
                </div>
            )}
        </div>
    )
}

export default TopNav
