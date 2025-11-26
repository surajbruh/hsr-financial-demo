import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage'
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'


const App = () => {
  return (
    <div className='relative'>
      {/* <Header /> */}
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
