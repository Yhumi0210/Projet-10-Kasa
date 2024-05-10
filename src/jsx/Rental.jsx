import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../database/DataBase.json'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Rental = () => {
    const { id } = useParams() // Récupération de l'ID à partir de l'URL
    const [rental, setRental] = useState(null)

    useEffect(() => {
        // Trouvez le logement correspondant dans la base de données
        const foundRental = data.find(rental => rental.id === id)
        setRental(foundRental)
    }, [id])

    if (!rental) {
        return <div>Loading...</div> // Gestion de l'état de chargement ou si aucun logement n'est trouvé
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="rental">
            <Slider {...settings}>
                {rental.pictures.map((picture, index) => (
                    <div key={index} className="rental__box">
                        <img className="rental__box__img" src={picture} alt={`View ${index}`} />
                    </div>
                ))}
            </Slider>
            <h1 className="rental__title">{rental.title}</h1>
            <p className="rental__text">{rental.location}</p>
            <section className="rental__boxtag">
                <div className="rental__boxtag__tags">
                    {rental.tags}
                </div>
            </section>
            <section>
                <div>
                    {rental.rating}
                </div>
                <div>
                    <p>{rental.host.name}</p>
                    <img src={rental.host.picture}/>
                </div>
            </section>
            {/* autres détails du logement */}
        </div>
    )
}

export default Rental
