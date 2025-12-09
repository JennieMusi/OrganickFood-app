import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Projects from './pages/Projects'
import News from './pages/News'
import Pages from './pages/Pages'

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pages' element={<Pages />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/news' element={<News />} />
        </Routes>


    </Router>
  )
}

export default App