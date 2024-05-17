import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Gestion de la navigation au clavier
    useEffect(() => {
        const handleKeyDown = (event) => {
            console.log(handleKeyDown)
            if (event.key === 'ArrowLeft') {
                goToPrevious();
            } else if (event.key === 'ArrowRight') {
                goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Nettoyage de l'écouteur d'événements
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex, images.length]);

    return (
        <div className="rental__box">
            {images.length > 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" onClick={goToPrevious} className="arrow left w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                </svg>
            )}
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="rental__box__img"/>
            {images.length > 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" onClick={goToNext} className="arrow right w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                </svg>
            )}
            {images.length > 1 && (
                <div className="image-counter">{`${currentIndex + 1} / ${images.length}`}</div>
            )}
        </div>
    );
}

export default ImageSlider;
