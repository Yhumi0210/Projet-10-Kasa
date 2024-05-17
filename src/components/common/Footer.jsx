import React from 'react'
import logoblc from "../../img/logoblc.png";

function Footer() {
    return (
        <div className='footer'>
            <img src={logoblc} className="footer__logo" alt="logo"/>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer