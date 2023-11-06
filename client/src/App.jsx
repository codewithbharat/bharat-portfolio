import React from 'react'

// importing react-router-dom 
import { Routes, Route } from "react-router-dom";

import { About, Contact, Hello, Notfound, Projects } from './pages'
import { Footer, Navbar } from './components'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Hello />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App