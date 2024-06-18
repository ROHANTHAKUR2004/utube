import React from 'react'
import './Sidebar.css'
import home from '../../assets/home/home.png'
import game from '../../assets/game_icon/game_icon.png'
import automobiles from '../../assets/auto/automobiles.png'
import sports from '../../assets/sports/sports.png'
import entertainment from '../../assets/entertainment/entertainment.png'
import tech from '../../assets/tech/tech.png'
import music from '../../assets/music/music.png'
import blogs from '../../assets/blogs/blogs.png'
import news from '../../assets/news/news.png'
import jack from '../../assets/jack/jack.png'
import simon from '../../assets/simon/simon.png'
import tom from '../../assets/tom/tom.png'
const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"": "small-sidebar"}`}>
      <div className="sortcut-links">
        <div className="side-links">
          <img src={home } alt="" /><p>Home</p>
        </div>
        <div className="side-links">
          <img src={game} alt="" /><p>Gaming</p>
        </div>
        <div className="side-links">
          <img src={automobiles} alt="" /><p>AutoMobiles</p>
        </div>
        <div className="side-links">
          <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className="side-links">
          <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className="side-links">
          <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className="side-links">
          <img src={music} alt="" /><p>Music</p>
        </div>
        <div className="side-links">
          <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className="side-links">
          <img src={news} alt="" /><p>News</p>
        </div>
        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-links">
          <img src={jack} alt="" /><p>Rohit</p>
        </div>
        <div className="side-links">
          <img src={simon} alt="" /><p>Virat</p>
        </div>
        <div className="side-links">
          <img src={tom} alt="" /><p>Tom</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
