import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotFound from './NotFound.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound/>,
  },
  {
    path: '/profiles',
    element: <h1>Profiles</h1>,
  },
  {
    path: '/profiles/:id',
    element: <Profile />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
