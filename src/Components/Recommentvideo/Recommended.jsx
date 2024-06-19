import React from 'react'
import './Recommended.css'
import thumb1 from '../../assets/thumbnail/thumbnail1.png'
import thumb2 from '../../assets/thumbnail/thumbnail2.png'
import thumb3 from '../../assets/thumbnail/thumbnail3.png'
import thumb4 from '../../assets/thumbnail/thumbnail4.png'

const Recommended = () => {
  return (
    <div className='recomended'>
        <div className="side-vid-list">
            <img src={thumb1} alt="" />
            <div className="vid-info">
                <h4>Lorem, ipsum dolor.</h4>
                <p>RohanYT</p>
                <p>2k Views</p>
            </div>
        </div>

        <div className="side-vid-list">
            <img src={thumb2} alt="" />
            <div className="vid-info">
                <h4>Lorem, ipsum dolor.</h4>
                <p>RohanYT</p>
                <p>2k Views</p>
            </div>
        </div>

        <div className="side-vid-list">
            <img src={thumb3} alt="" />
            <div className="vid-info">
                <h4>Lorem, ipsum dolor.</h4>
                <p>RohanYT</p>
                <p>2k Views</p>
            </div>
        </div>


        <div className="side-vid-list">
            <img src={thumb4} alt="" />
            <div className="vid-info">
                <h4>Lorem, ipsum dolor.</h4>
                <p>RohanYT</p>
                <p>2k Views</p>
            </div>
        </div>

    </div>
  )
}

export default Recommended
