import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import TopNav from './Partials/TopNav'
import Header from './Partials/Header'
import Dropdown from './Partials/Dropdown'
import HorizontalCards from './Partials/HorizontalCards'
import SideNav from './Partials/SideNav'
import Loading from './Loading'

const Home = () => {
    document.title = "Alibi || Movie"
    const [wallpaper, setwallpaper] = useState(null)
    const [trending, settrending] = useState(null)
    const [category, setcategory] = useState("all")

    const GetHeaderWallpaper = async () => {
      try {
          const {data} = await axios.get(`/trending/all/day`)
          let randomdata = data.results[(Math.random() * data.results.length).toFixed()]
          setwallpaper(randomdata)
      } catch (error) {
          console.log("Error : ", error)
      }
  }

  const GetTrendingData = async () => {
    try {
        const {data} = await axios.get(`/trending/${category}/day`)
        settrending(data.results)
    } catch (error) {
        console.log("Error : ", error)
    }
}
  useEffect(()=>{
    GetTrendingData();
   !wallpaper && GetHeaderWallpaper();
 
  },[category])

  return  wallpaper ? (
    <>
    <SideNav/>
    <div className=' w-[80%] h-full overflow-y-auto overflow-x-hidden'>
        <TopNav/>
        <Header  data={wallpaper}/>
        <div className='p-5  w-full flex justify-between'>
            <h1 className='text-3xl font-semibold text-zinc-400 '>Trending</h1>
            <Dropdown title="Filter" option={["tv", "movie", "all"]} func={(e)=>setcategory(e.target.value)} />
        </div>
        <HorizontalCards data={trending}  />
    </div>
    </>
  )
   : <Loading/>
}

export default Home
