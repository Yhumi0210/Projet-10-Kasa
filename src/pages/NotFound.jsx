import React from 'react'
import { NavLink } from "react-router-dom"

function NotFound() {
    return (
        <div className="error">
            <h1 className="error__title">404</h1>
            <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="error__link">
                Retourner sur la page d’accueil
            </NavLink>
        </div>
    )
}

export default NotFound