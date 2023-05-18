import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[93vw] mx-auto'>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
   </div>
  </React.StrictMode>,
)
