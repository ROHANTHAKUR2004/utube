import React from 'react'
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommended from '../../Components/Recommentvideo/Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {

  const {videoId , categoryId} = useParams();
  return (
    <div className='play-container'>
       <Playvideo videoId={videoId} />
       <Recommended />
    </div>
  )
}

export default Video
