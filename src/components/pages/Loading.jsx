import React from 'react'
import Loader from "/Loader.gif"

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <img className='h-[20vh]' src={Loader} alt="" />
    </div>
  )
}

export default Loading
