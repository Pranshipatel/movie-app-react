import React, { useEffect, useState } from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import axios from '../utils/axios'
import Header from './Header'

const Home = () => {
    document.title = "Alibi || Movie"
    const [wallpaper, setwallpaper] = useState(null)

    const GetHeaderWallpaper = async () => {
      try {
          const {data} = await axios.get(`/trending/all/day`)
          let randomdata = data.results[(Math.random() * data.results.length).toFixed()]
          setwallpaper(randomdata)
      } catch (error) {
          console.log("Error : ", error)
          setsearch([]) 
      }
  }
  useEffect(()=>{
   !wallpaper && GetHeaderWallpaper()
  },[])
  return  wallpaper ? (
    <>
    <SideNav/>
    <div className=' w-[80%] h-full '>
        <TopNav/>
        <Header  data={wallpaper}/>
    </div>
    </>
  )
   :<h1>Loading</h1>
  
}

export default Home
