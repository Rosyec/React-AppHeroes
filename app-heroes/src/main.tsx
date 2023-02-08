import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { HeroesApp } from './HeroesApp'
import { AppRouter } from './router/AppRouter'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { LoginPage } from './auth/pages/LoginPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter}></RouterProvider>
  </React.StrictMode>,
)
