
import { Link } from 'react-router-dom';
import { value_convert } from '../../data';
import './Recommended.css'

import { useEffect, useState } from 'react'

const Recommended = ({categoryId}) => {

    const [apidata, setapidata] = useState([]);

    const fetchdata = async () =>{
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=21&regionCode=US&videoCategoryId=${categoryId}&key=AIzaSyDyqxX0uSeCfZJKCRlBiPSozSQah6K_QiA`
         await fetch(url)
         .then(res =>res.json()) 
         .then(data => setapidata(data.items))   
        }


        console.log(apidata)
        useEffect(()=>{
            fetchdata();
        },[]);



  return (
    
    <div className='recomended'>
        {apidata.map((item,index)=>{
          return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`}  
            key={index} className="side-vid-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_convert(item.statistics.viewCount)} views </p>
            </div>
        </Link>
          )  
})}
       
    </div>
  )
}

export default Recommended
