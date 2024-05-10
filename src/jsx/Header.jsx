import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.png'
import '../assets/css/index.css'

function Header() {
    return (
        <div>
            <header className="header">
                <img src={logo} className="header__logo" alt="logo" />
                <nav className="header__nav">
                    <NavLink to="/" className="header__nav__menu" activeClassName="active" exact >
                        accueil
                    </NavLink>
                    <NavLink to="/about" className="header__nav__menu" activeClassName="active">
                        à propos
                    </NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Header
