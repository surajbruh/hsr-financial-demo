import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
// import NotFoundPage from './pages/NotFoundPage'
import LandingPage from './pages/LandingPage'


const App = () => {
  return (
    <div className='relative'>
      <Header />
      <Routes>
        <Route index element={<LandingPage />} />
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
