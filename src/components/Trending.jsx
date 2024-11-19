import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from './Partials/TopNav'
import Dropdown from './Partials/Dropdown'
import axios from '../utils/axios'

const Trending = () => {
  const navigate = useNavigate()
  const [category, setcategory] = useState("all")
  const [duration, setduration] = useState("day")
  const [trending, settrending] = useState(null)

  const GetTrendingData = async () => {
    try {
        const {data} = await axios.get(`/trending/${category}/${duration}`)
        settrending(data.results)
    } catch (error) {
        console.log("Error : ", error)
    }
}
console.log(trending)
  useEffect(()=>{
    GetTrendingData();
  },[category , duration])
  return (
    <div className='w-screen h-screen px-3'>
      <div className='text-gray-600 p-6  w-full flex justify-between items-center '>
        <h1 className='font-semibold text-2xl'>
          <i onClick={() => navigate(-1)} class="ri-arrow-left-line mr-1 hover:text-[#6556CD]"></i>
          Trending
        </h1>
        <TopNav  />
        <div className="flex gap-4  ">
          <Dropdown title="Category" option={["tv", "movies", "all"]} />
          <Dropdown title="Duration" option={["week" , "day"]} func="" />
        </div>
      </div>
    </div>
  )
}

export default Trending
