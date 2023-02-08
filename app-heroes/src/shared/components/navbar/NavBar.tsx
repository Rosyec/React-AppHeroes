import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'
import Logo from '../../../assets/superhero.png'

export const NavBar = () => {

    const navigate = useNavigate();

    const user = localStorage.getItem('user') || 'Usuario';

    const onLogout = () => {
        navigate( '/login', { replace: true } )
    }

    return (
        <div>
            <nav className="navbar py-0 navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink to={ '/app/dc' } className="navbar-brand">
                        <img src={ Logo } alt="" style={{height: '50px'}} />App
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex">
                            <li className="nav-item">
                                <NavLink to={ '/app/dc' }     className={ ({isActive}) => isActive ? 'nav-link active fw-semibold' : 'nav-link' } aria-current="page">Dc</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={ '/app/marvel' } className={ ({isActive}) => isActive ? 'nav-link active fw-semibold' : 'nav-link' }>Marvel</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={ '/app/buscar' } className={ ({isActive}) => isActive ? 'nav-link active fw-semibold' : 'nav-link' }>Buscar</NavLink>
                            </li>
                        </ul>
                            <span className="spacer"></span>
                            <span className=''>{ user }</span>
                            <span className='mx-2'>|</span>
                            <a onClick={ onLogout } className='btn btn-outline-dark'>Logout</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
