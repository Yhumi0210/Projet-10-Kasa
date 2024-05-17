import React from 'react'

function Hero(props) {

    return (
        <div className='hero'>
            <img src={props.image} alt='image hero' />
            {
                props.title &&
                    <h1 className="hero__title">{props.title}</h1>
            }
        </div>
    )
}

export default Hero