
import './Playvideo.css'
import like from '../../assets/like/like.png'
import dislike from '../../assets/dislike/dislike.png'
import share from '../../assets/share/share.png'
import save from '../../assets/save/save.png'
 import userProfile from '../../assets/profile/user_profile.jpg'
import { useEffect, useState } from 'react'
import { value_convert } from '../../data'
import moment from 'moment'
const Playvideo = ({videoId}) => {

    const [apidata, setapidata] = useState(null);
    const [channeldata, setchanneldata] = useState(null);
    const [commentdata , setcommentdata] = useState([]);


    const fetchvideodata = async () =>{
           const video_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyDyqxX0uSeCfZJKCRlBiPSozSQah6K_QiA`
           await fetch(video_url)
           .then(res => res.json())
           .then(data =>setapidata(data.items[0]))
           
     }

     const fetchchanneldata = async () =>{

         const channel_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=AIzaSyDyqxX0uSeCfZJKCRlBiPSozSQah6K_QiA`
          await fetch(channel_url)
          .then(res => res.json())
          .then(data => setchanneldata(data.items[0]))


    
        }

        const fetchcommentdata = async () =>{
            const comment_url =`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=AIzaSyDyqxX0uSeCfZJKCRlBiPSozSQah6K_QiA`
            await fetch(comment_url)
            .then(res =>res.json())
            .then(data => setcommentdata(data.items))

        }

     console.log(commentdata)
     useEffect(()=>{
            fetchvideodata();     
     },[])

     useEffect(()  =>{
           fetchchanneldata();
            fetchcommentdata();
     },[])

  return (
    <div className='play-video'>
        {/* <video src={video1}  controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apidata?apidata.snippet.title : "Title"}</h3>
        <div className="play-video-info">
            <p>{apidata?value_convert(apidata.statistics.viewCount) : "16K"} Views &bull;  {apidata?moment(apidata.snippet.publishedAt).fromNow(): ""}</p>
            <div>
                <span><img src={like} alt="" />{apidata?value_convert(apidata.statistics.likeCount ): "134"}</span>
                <span><img src={dislike} alt="" />10</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channeldata?channeldata.snippet.thumbnails.default.url : ""} alt="" />
            <div>
                <p>{apidata?apidata.snippet.channelTitle : "RohanYT"}</p>
                <span>{channeldata?value_convert(channeldata.statistics.subscriberCount) : "1M"} Subscriber</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vide-desc">
           <p>{apidata?apidata.snippet.description.slice(0,250): "despe"}</p>
            <hr />
            <h4>{apidata?value_convert(apidata.statistics.commentCount) : 20} Comments</h4>
           
         {commentdata.map((item,index)=>{
            return(
               
                <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <div>
                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}
                         <span>1 day ago</span></h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>{value_convert(item.snippet.topLevelComment.snippet.likeCount)}</span>
                        <img src={dislike} alt="" />
                        <span></span>
                    </div>
                </div>
            </div>
            )
         })}
          
            




            


        </div>
    </div>
  )
}

export default Playvideo
