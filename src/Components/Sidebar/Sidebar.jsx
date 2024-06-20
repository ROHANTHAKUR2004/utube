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
const Sidebar = ({sidebar , category , setcategory}) => {
  return (
    <div className={`sidebar ${sidebar?"": "small-sidebar"}`}>
      <div className="sortcut-links">
        <div className={`side-links ${category === 0 ? "active" : "" }`} 
        onClick={ () => setcategory(0)} >
          <img src={home } alt="" /><p>Home</p>
        </div>
        <div className={`side-links ${category === 20 ? "active" : "" }`}
         onClick={ () => setcategory(20)}>
          <img src={game} alt="" /><p>Gaming</p>
        </div>
        <div className={`side-links ${category === 2 ? "active" : "" }`}
        onClick={ () => setcategory(2)}>
          <img src={automobiles} alt="" /><p>AutoMobiles</p>
        </div>
        <div className={`side-links ${category === 17 ? "active" : "" }`}
         onClick={ () => setcategory(17)}>
          <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className={`side-links ${category === 24 ? "active" : "" }`}
         onClick={ () => setcategory(24)}>
          <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className={`side-links ${category === 28 ? "active" : "" }`}
         onClick={ () => setcategory(28)}>
          <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className={`side-links ${category === 10 ? "active" : "" }`}
         onClick={ () => setcategory(10)}>
          <img src={music} alt="" /><p>Music</p>
        </div>
        <div className={`side-links ${category === 22 ? "active" : "" }`}
        onClick={ () => setcategory(22)}>
          <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className={`side-links ${category === 25 ? "active" : "" }`}
         onClick={ () => setcategory(25)}>
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
