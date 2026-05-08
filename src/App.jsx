import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './Pages/Homepage/Homepage'
import ServicePage from './Pages/ServicePage/ServicePage'

import ScrollToTop from './Components/ScrolltoTop/ScrollToTop'
import NotFound from './Pages/Notfound/Notfound'

function App() {

  return (

    <>
      <ScrollToTop />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* SERVICE PAGES */}
        <Route
          path="/services/:slug"
          element={<ServicePage />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound/>}
        />

      </Routes>
    </>

  )
}

export default App