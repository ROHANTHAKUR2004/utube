import React, { useEffect, useState } from 'react'
import './Feed.css'


import { Link } from 'react-router-dom'
import { API_kEY, value_convert } from '../../data'
import moment from 'moment'

const Feed = ({category}) => {

     const [data, setdata] = useState([]);

    const fetchdata = async () =>{
     const videolist_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${category}&key=AIzaSyDyqxX0uSeCfZJKCRlBiPSozSQah6K_QiA`

     await fetch(videolist_url).then(response => response.json()).then(data =>setdata(data.items))
      console.log(data)
    } 

    useEffect(()=>{
           fetchdata();
    },[category])

  return (
    <div className="feed">
     {data.map((item,index)=>{
         return (
          <>
          <Link to={`video/${item.snippet.categoryId}/${item.id}`}
           className='card'>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
           <h2>
              {item.snippet.title}
          </h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p> {value_convert(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}  </p>
           </Link>
           </>
         )
     })}
    

   

    </div>
   
  )
}

export default Feed
