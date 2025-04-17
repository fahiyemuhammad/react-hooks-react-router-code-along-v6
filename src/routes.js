import React from 'react'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import About from './components/About'
import Login from './components/Login'
import UserProfile from './pages/UserPofile'


const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    }, 
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />
    },
    {
      path: "/profile/:id",
      element: <UserProfile />,
      errorElement: <ErrorPage />
    }
  ];

export default routes