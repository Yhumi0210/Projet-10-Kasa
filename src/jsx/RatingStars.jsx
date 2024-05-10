import React from 'react'

const RatingStars = ({ rating }) => {
    const totalStars = 5
    let stars = []
    for (let i = 1; i <= totalStars; i++) {
        if (i <= rating) {
            stars.push(<span key={i} className="rental__star__full">★</span>)
        } else {
            stars.push(<span key={i} className="rental__star__empty">☆</span>)
        }
    }

    return <div>{stars}</div>
}

export default RatingStars
