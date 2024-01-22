import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router.jsx'
import {RouterProvider} from 'react-router-dom'
import './index.css'
import {  UserContextProvider } from './context/UserContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <UserContextProvider>
   <RouterProvider router={router} />
   </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)