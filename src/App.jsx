import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./Pages/Homepage/Homepage'))
const ServicePage = lazy(() => import('./Pages/ServicePage/ServicePage'))
const NotFound = lazy(() => import('./Pages/Notfound/Notfound'))

import ScrollToTop from './Components/ScrolltoTop/ScrollToTop'
import AppointmentModal from './Components/AppointmentModal/AppointmentModal.jsx'

function PageLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-teal-500 border-t-transparent" />
    </div>
  );
}

function App() {

  return (

    <>
      <ScrollToTop />
      <AppointmentModal />

      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </>

  )
}

export default App