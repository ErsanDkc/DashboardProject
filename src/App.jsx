import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/router'
import API from './services/service'
import { ToastContainer } from 'react-toastify'
import Toast from './components/Toast'

function App() {
  useEffect(() => {
    API.defaults.baseURL = import.meta.env.VITE_BASE_URL
  }, [])
  return (
    <>
      <Toast />
      <RouterProvider router={router} />
    </>
  )
}

export default App
