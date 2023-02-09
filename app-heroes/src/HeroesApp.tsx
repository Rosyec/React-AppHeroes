import React, { useContext } from 'react'
import { Footer } from './shared/components/footer/Footer'
import { NavBar } from './shared/components/navbar/NavBar'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './auth/context/AuthContext'
import './HeroesApp.css'

export const HeroesApp = () => {

  const { state } = useContext(AuthContext);

  return (
    <>
      <NavBar></NavBar>
      <div id='patern' className="container text-center">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}
