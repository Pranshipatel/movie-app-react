import React, {  useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import TopNav from '../Partials/TopNav'
import Dropdown from '../Partials/Dropdown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../Partials/Card'
import axios from '../../utils/axios'

const Tv = () => {
    const navigate = useNavigate()
    const [category, setCategory] = useState('airing_today')
    const [tv, setTv] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
  
    document.title = "Tv" + category

    // Function to fetch tv data
    const GetTvData = async () => {
      if (loading) return; // Prevent simultaneous requests
  
      setLoading(true)
      const encodedCategory = encodeURIComponent(category)
  
      try {
        // Construct the request URL with URL encoded parameters
        const { data } = await axios.get(`/tv/${encodedCategory}?page=${page}`)
        if (data.results.length > 0) {
          setTv((prevState) => [...prevState, ...data.results])
          setPage(prevPage => prevPage + 1) // Increase page for pagination
        } else {
          setHasMore(false) // No more results
        }
      } catch (error) {
        console.error("Error fetching tv data:", error)
        setHasMore(false) // Stop further requests if an error occurs
      } finally {
        setLoading(false) // Stop loading
      }
    }
  
    // Function to refresh data when category or duration changes
    const refreshHandler = async () => {
      setPage(1) // Reset page to 1 for the fresh request
      setHasMore(true) // Enable pagination
      setTv([]) // Clear existing data
      GetTvData() // Fetch new data
    }
  
    // Fetch data when category or duration changes
    useEffect(() => {
      refreshHandler()
    }, [category])
  
  return tv.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="text-gray-600 px-7 py-2 w-full flex justify-between items-center">
        <h1 className="font-semibold text-2xl">
          <i onClick={() => navigate(-1)} className="ri-arrow-left-line mr-1 hover:text-[#6556CD]"></i>
          Tv
        </h1>
        <div className="mr-[5%] w-[60%]">
          <TopNav />
        </div>
        <div className="flex gap-4">
          <Dropdown 
          title="Category" 
          option={['popular', 'on_the_air' , "top_rated" , "airing_today"]} 
          func={(e) => setCategory(e.target.value)} />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTvData}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Card data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : <Loading />
}

export default Tv
