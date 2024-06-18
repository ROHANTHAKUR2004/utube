
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/video/:categoryId/:videoId' element={<Video/>} />
     </Routes>
    </>
  )
}

export default App
