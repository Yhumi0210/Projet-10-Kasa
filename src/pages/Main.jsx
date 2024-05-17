import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'  // Import de useNavigate
import data from '../database/DataBase.json'
import Hero from '../components/common/Hero'
import image from '../img/img1.png'

const Main = () => {
    const [properties, setProperties] = useState([])
    const navigate = useNavigate()  // Hook pour la navigation

    // On charge les données du JSON au montage du composant
    useEffect(() => {
        setProperties(data)
    }, [])

    // Fonction pour gérer le clic sur une carte
    const handleCardClick = (id) => {
        navigate(`/rental/${id}`)  // Navigate vers la page du logement avec l'ID correspondant
    }

    return (<div>
        <Hero image={image} title="Chez vous, partout et ailleurs"/>
        <div className="main">
            {properties.map(property => (
                <div key={property.id} className="main__card" onClick={() => handleCardClick(property.id)}>
                    <img src={property.cover} className="main__card__img" alt={property.title} />
                    <h2 className="main__card__title">{property.title}</h2>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Main