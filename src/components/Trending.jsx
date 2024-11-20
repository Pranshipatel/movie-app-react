import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from './Partials/TopNav'
import Dropdown from './Partials/Dropdown'
import axios from '../utils/axios'
import Card from './Partials/Card'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  const navigate = useNavigate()
  const [category, setcategory] = useState("all")
  const [duration, setduration] = useState("day")
  const [trending, settrending] = useState([])
  const [page, setpage] = useState(1)

  const GetTrendingData = async () => {
    try {
        const {data} = await axios.get(`/trending/${category}/${duration}`)
        // settrending(data.results)
        
        settrending((prevState)=>[...prevState, ...data.results])
        setpage(page+1);
        console.log(data)
    } catch (error) {
        console.log("Error : ", error)
    }
}
  useEffect(()=>{
    GetTrendingData();
  },[category , duration])


  return trending.length > 0 ? (
    <div className='w-screen h-screen px-7 overflow-x-hidden overflow-y-auto'>
      <div className='text-gray-600 p-2  w-full flex justify-between items-center  '>
        <h1 className='font-semibold text-2xl'>
          <i onClick={() => navigate(-1)} className="ri-arrow-left-line mr-1 hover:text-[#6556CD]"></i>
          Trending
        </h1>
        <div className="mr-[5%] w-[60%]">
        <TopNav />
        </div>
        <div className="flex gap-4  ">
          <Dropdown title="Category" option={["tv", "movies", "all"]} func={(e)=>setcategory(e.target.value)} />
          <Dropdown title="Duration" option={["week" , "day"]} func={(e)=>setduration(e.target.value)} />
        </div>
      </div>

      <InfiniteScroll 
      dataLength={trending.length}
      next={GetTrendingData}
      hasMore={true}
      loader={<h1 className='text-white'>Loading...</h1>}
      >
      <Card data={trending} title={category} />
      </InfiniteScroll>
      
    </div>
  ) : <Loading/>
}

export default Trending
