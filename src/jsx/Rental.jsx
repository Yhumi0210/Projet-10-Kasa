import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../database/DataBase.json'
import ImageSlider from './ImageSlider'
import RentalTags from './RentalTags'
import RatingStars from './RatingStars'
import Collapse from './Collapse'

const Rental = () => {
    const { id } = useParams() // Récupération de l'ID à partir de l'URL
    const [rental, setRental] = useState(null)
    const [isLoading, setIsLoading] = useState(true) // Ajout d'un état de chargement
    const navigate = useNavigate()

    useEffect(() => {
        // Trouve le logement correspondant dans la base de données
        const foundRental = data.find(rental => rental.id === id)

        if (foundRental) {
            setRental(foundRental)
        } else {
            navigate('/404') // Redirige vers la page 404 si l'ID est invalide
        }
        setIsLoading(false) // Mettre à jour l'état de chargement
    }, [id, navigate])

    if (isLoading) {
        return <div>Loading...</div> // Gestion de l'état de chargement
    }

    return (
        <div className="rental">
            {rental && (
                <div>
                    <ImageSlider images={rental.pictures} />
                    <h1 className="rental__title">{rental.title}</h1>
                    <p className="rental__text">{rental.location}</p>
                    <RentalTags tags={rental.tags} />
                    <section className="rental__details">
                        <div className="rental__details__rating">
                            <RatingStars rating={parseInt(rental.rating)} />
                        </div>
                        <div className="rental__details__owner">
                            <p className="rental__details__owner__name">{rental.host.name}</p>
                            <div className="rental__details__owner__box">
                                <img
                                    className="rental__details__owner__box__picture"
                                    src={rental.host.picture}
                                    alt={`Profile of ${rental.host.name}`}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="section-collapse">
                        <Collapse title="Description" content={rental.description} />
                        <Collapse
                            title="Équipements"
                            content={<ul>{rental.equipments.map((equip, index) => <li key={index}>{equip}</li>)}</ul>}
                        />
                    </section>
                </div>
            )}
        </div>
    )
}

export default Rental
