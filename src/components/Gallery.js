import React from 'react';
import { useState } from 'react';
import '../styles/gallery.css'

function Gallery({ images }) {

    const [galleryPosition, setgalleryPosition] = useState(0)

    const next = () => {
        galleryPosition < images.length - 1
            ? setgalleryPosition(galleryPosition + 1)
            : setgalleryPosition(0)
    }

    const previous = () => {
        galleryPosition > 0
            ? setgalleryPosition(galleryPosition - 1)
            : setgalleryPosition(images.length - 1)
    }

    return (
        <div className='accomodation__carousel'>
            <div className='controls'>
                {images.length > 1 ? (
                    <button className='control__previous' onClick={() => previous()}>
                        <i className='fa-solid fa-chevron-left'></i>
                    </button>

                ) : null}

                <p>{galleryPosition + 1}/{images.length}</p>
                {images.length > 1 ? (
                    <button className='control__next' onClick={() => next()}>
                        <i className='fa-solid fa-chevron-right'></i>
                    </button>
                ) : null}
            </div>
            <img src={images[galleryPosition]} alt='#' />
        </div>
    );
};

export default Gallery;