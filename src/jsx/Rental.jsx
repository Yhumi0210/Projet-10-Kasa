import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../database/DataBase.json'
import ImageSlider from './ImageSlider'
import RentalTags from './RentalTags'
import RatingStars from './RatingStars'

const Rental = () => {
    const { id } = useParams() // Récupération de l'ID à partir de l'URL
    const [rental, setRental] = useState(null)

    useEffect(() => {
        // Trouve le logement correspondant dans la base de données
        const foundRental = data.find(rental => rental.id === id)
        setRental(foundRental)
    }, [id])

    if (!rental) {
        return <div>Loading...</div> // Gestion de l'état de chargement ou si aucun logement n'est trouvé
    }

    return (
        <div className="rental">
            <ImageSlider images={rental.pictures}/>
            <h1 className="rental__title">{rental.title}</h1>
            <p className="rental__text">{rental.location}</p>
            <RentalTags tags={rental.tags}/>
            <section className="rental__details">
                <div className="rental__details__rating">
                    <RatingStars rating={parseInt(rental.rating)}/>
                </div>
                <div className="rental__details__owner">
                    <p className="rental__details__owner__name">{rental.host.name}</p>
                    <div className="rental__details__owner__box">
                        <img className="rental__details__owner__box__picture" src={rental.host.picture}
                             alt={`Profile of ${rental.host.name}`}/>
                    </div>
                </div>
            </section>
            {/* autres détails du logement */}
        </div>
    )
}

export default Rental
