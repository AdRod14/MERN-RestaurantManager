import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router.jsx'
import {RouterProvider} from 'react-router-dom'
import './index.css'
import {  UserContextProvider } from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
   <RouterProvider router={router} />
   </UserContextProvider>
  </React.StrictMode>,
)