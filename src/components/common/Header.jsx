import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.png'
import '../../assets/css/index.css'

function Header() {
    return (
        <div>
            <header className="header">
                <NavLink to="/">
                    <img src={logo} className="header__logo" alt="logo" />
                </NavLink>
                <nav className="header__nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? "header__nav__menu active" : "header__nav__menu"} end>
                        accueil
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "header__nav__menu active" : "header__nav__menu"} end>
                        à propos
                    </NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Header
