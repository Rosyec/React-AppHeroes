import React from 'react'
import { Footer } from './shared/components/footer/Footer'
import { NavBar } from './shared/components/navbar/NavBar'
import { Outlet } from 'react-router-dom'
import './HeroesApp.css'

export const HeroesApp = () => {
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
