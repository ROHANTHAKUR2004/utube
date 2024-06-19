import React from 'react'
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommended from '../../Components/Recommentvideo/Recommended'
const Video = () => {
  return (
    <div className='play-container'>
       <Playvideo />
       <Recommended />
    </div>
  )
}

export default Video
