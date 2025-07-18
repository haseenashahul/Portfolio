import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'


const App = () => {
  return (
    <div>
       <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>
    </div>
  )
}

export default App