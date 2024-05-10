import React, { useState } from 'react'

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1
        const newIndex = isLastImage ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className="rental__box">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" onClick={goToPrevious} className="arrow left w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
            </svg>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="rental__box__img"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" onClick={goToNext} className="arrow right w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
            </svg>

        </div>
    )
}

export default ImageSlider
