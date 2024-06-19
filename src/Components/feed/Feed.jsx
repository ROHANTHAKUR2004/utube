import React from 'react'
import './Feed.css'
import thumb1 from '../../assets/thumbnail/thumbnail1.png'
import thumb2 from '../../assets/thumbnail/thumbnail2.png'
import thumb3 from '../../assets/thumbnail/thumbnail3.png'
import thumb4 from '../../assets/thumbnail/thumbnail4.png'
import thumb5 from '../../assets/thumbnail/thumbnail5.png'
import thumb6 from '../../assets/thumbnail/thumbnail6.png'
import thumb7 from '../../assets/thumbnail/thumbnail7.png'
import thumb8 from '../../assets/thumbnail/thumbnail8.png'
import { Link } from 'react-router-dom'
const Feed = () => {
  return (
    <div className="feed">
      <Link to={`video/20/4521`} className='card'>
         <img src={thumb1} alt="" />
          <h2>
         Lets learn something..
         </h2>
         <h3>ROHANYT</h3>
         <p>15k views &bull; 2 days ago </p>
    </Link>

    <div className='card'>
         <img src={thumb2} alt="" />
          <h2>
         Lets learn something..
         </h2>
         <h3>ROHANYT</h3>
         <p>15k views &bull; 2 days ago </p>
    </div>
    <div className='card'>
         <img src={thumb3} alt="" />
          <h2>
         Lets learn something..
         </h2>
         <h3>ROHANYT</h3>
         <p>15k views &bull; 2 days ago </p>
    </div>
    <div className='card'>
         <img src={thumb4} alt="" />
          <h2>
         Lets learn something..
         </h2>
         <h3>ROHANYT</h3>
         <p>15k views &bull; 2 days ago </p>
    </div>
    <div className='card'>
         <img src={thumb5} alt="" />
          <h2>
         Lets learn something..
         </h2>
         <h3>ROHANYT</h3>
         <p>15k views &bull; 2 days ago </p>
    </div>
    <div className='card'>
         <img src={thumb6} alt="" />
          <h2>
         Lets learn something..
         </h2>
         <h3>ROHANYT</h3>
         <p>15k views &bull; 2 days ago </p>
    </div>
    <div className='card'>
         <img src={thumb7} alt="" />
          <h2>
         Lets learn something..
         </h2>
         <h3>ROHANYT</h3>
         <p>15k views &bull; 2 days ago </p>
    </div>
    <div className='card'>
         <img src={thumb8} alt="" />
          <h2>
         Lets learn something..
         </h2>
         <h3>ROHANYT</h3>
         <p>15k views &bull; 2 days ago </p>
    </div>
    


    </div>
   
  )
}

export default Feed
