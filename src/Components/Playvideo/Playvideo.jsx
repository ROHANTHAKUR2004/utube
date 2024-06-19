import React from 'react'
import './Playvideo.css'
import video1 from '../../assets/video/video.mp4'
import like from '../../assets/like/like.png'
import dislike from '../../assets/dislike/dislike.png'
import share from '../../assets/share/share.png'
import save from '../../assets/save/save.png'
 import jack from '../../assets/jack/jack.png'
 import userProfile from '../../assets/profile/user_profile.jpg'
const Playvideo = () => {
  return (
    <div className='play-video'>
        <video src={video1}  controls autoPlay muted></video>
        <h3>new yt </h3>
        <div className="play-video-info">
            <p>2943 Views &bull; 2 Days ago</p>
            <div>
                <span><img src={like} alt="" />124</span>
                <span><img src={dislike} alt="" />14</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>RohanYT</p>
                <span>1M Subscriberd</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vide-desc">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quisquam.
            </p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={userProfile} alt="" />
                <div>
                    <h3>jack <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>12</span>
                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={userProfile} alt="" />
                <div>
                    <h3>jack <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>12</span>
                    </div>
                </div>
            </div>



      

        </div>
    </div>
  )
}

export default Playvideo
