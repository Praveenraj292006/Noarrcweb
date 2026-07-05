import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppointmentProvider } from './Context/AppointmentContext'

import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(

  <AppointmentProvider>

    <BrowserRouter>

        <App/>

    </BrowserRouter>

</AppointmentProvider>
)