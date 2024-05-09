import React, { useState, useEffect } from 'react'
import data from '../database/DataBase.json'

const Main = () => {
    // On stocke les données chargées dans un état local
    const [properties, setProperties] = useState([])

    // On charge les données du JSON au montage du composant
    useEffect(() => {
        setProperties(data)
    }, [])

    return (
        <div className="main">
            {properties.map(property => (
                <div key={property.id} className="main__card">
                    <img src={property.cover} className="main__card__img" alt={property.title} />
                    <h2 className="main__card__title">{property.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default Main
