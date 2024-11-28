import React, {  useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import TopNav from '../Partials/TopNav'
import Dropdown from '../Partials/Dropdown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../Partials/Card'
import axios from '../../utils/axios'

const People = () => {
    const navigate = useNavigate()
    const [category, setCategory] = useState('popular')
    const [people, setPerson] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
  
    document.title = "Popular" + category

    // Function to fetch people data
    const GetPeopleData = async () => {
      if (loading) return; // Prevent simultaneous requests
  
      setLoading(true)
      const encodedCategory = encodeURIComponent(category)
  
      try {
        // Construct the request URL with URL encoded parameters
        const { data } = await axios.get(`/person/popular?page=${page}`)
        if (data.results.length > 0) {
          setPerson((prevState) => [...prevState, ...data.results])
          setPage(prevPage => prevPage + 1) // Increase page for pagination
        } else {
          setHasMore(false) // No more results
        }
      } catch (error) {
        console.error("Error fetching people data:", error)
        setHasMore(false) // Stop further requests if an error occurs
      } finally {
        setLoading(false) // Stop loading
      }
    }
  
    // Function to refresh data when category or duration changes
    const refreshHandler = async () => {
      setPage(1) // Reset page to 1 for the fresh request
      setHasMore(true) // Enable pagination
      setPerson([]) // Clear existing data
      GetPeopleData() // Fetch new data
    }
  
    // Fetch data when category or duration changes
    useEffect(() => {
      refreshHandler()
    }, [category])
  
  return people.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="text-gray-600 px-7 py-2 w-full flex justify-between items-center">
        <h1 className="font-semibold text-2xl">
          <i onClick={() => navigate(-1)} className="ri-arrow-left-line mr-1 hover:text-[#6556CD]"></i>
          People
        </h1>
        <div className="mr-[5%] w-[60%]">
          <TopNav />
        </div>
        
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={GetPeopleData}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Card data={people} title="people" />
      </InfiniteScroll>
    </div>
  ) : <Loading />

}

export default People
