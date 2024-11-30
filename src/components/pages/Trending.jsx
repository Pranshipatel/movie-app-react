import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../Partials/TopNav'
import Dropdown from '../Partials/Dropdown'
import axios from '../../utils/axios'
import Card from '../Partials/Card'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

const Trending = () => {
  const navigate = useNavigate()
  const [category, setCategory] = useState('all')
  const [duration, setDuration] = useState('day')
  const [trending, setTrending] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  document.title = "Trending " + category

  // Function to fetch trending data
  const GetTrendingData = async () => {
    if (loading) return; // Prevent simultaneous requests

    setLoading(true)
    const encodedCategory = encodeURIComponent(category)
    const encodedDuration = encodeURIComponent(duration)

    try {
      // Construct the request URL with URL encoded parameters
      const { data } = await axios.get(`/trending/${encodedCategory}/${encodedDuration}?page=${page}`)

      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results])
        setPage(prevPage => prevPage + 1) // Increase page for pagination
      } else {
        setHasMore(false) // No more results
      }
    } catch (error) {
      console.error("Error fetching trending data:", error)
      setHasMore(false) // Stop further requests if an error occurs
    } finally {
      setLoading(false) // Stop loading
    }
  }

  // Function to refresh data when category or duration changes
  const refreshHandler = async () => {
    setPage(1) // Reset page to 1 for the fresh request
    setHasMore(true) // Enable pagination
    setTrending([]) // Clear existing data
    GetTrendingData() // Fetch new data
  }

  // Fetch data when category or duration changes
  useEffect(() => {
    refreshHandler()
  }, [category, duration])

  return trending.length > 0 ? (
    <div className="w-screen h-screen overflow-y-auto">
      <div className="text-gray-600 px-7 py-2 w-full flex justify-between items-center">
        <h1 className="font-semibold text-2xl">
          <i onClick={() => navigate(-1)} className="ri-arrow-left-line mr-1 hover:text-[#6556CD]"></i>
          Trending
        </h1>
        <div className="mr-[5%] w-[60%]">
          <TopNav />
        </div>
        <div className="flex gap-4">
          <Dropdown title="Category" option={['tv', 'movies', 'all']} func={(e) => setCategory(e.target.value)} />
          <Dropdown title="Duration" option={['week', 'day']} func={(e) => setDuration(e.target.value)} />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrendingData}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Card data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : <Loading />
}

export default Trending
