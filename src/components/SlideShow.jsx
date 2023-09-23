import React from "react";

import "../styles/SlideShow.scss"


const SlideShow = ({images}) => {

    // initialisation de l'index du slideshow. par defaut on selectionne la przmière image avec l'index 
    const [currentImage, setCurrentImage] = React.useState(0);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    return (
        <div className="carousel">
        <img src={images[currentImage]} alt={`slide image ${currentImage + 1}`} />
        {images.length >1 && (
            <p className="indicator">
                {currentImage + 1}/{images.length}
            </p>
        )}

        {images.length >1 && (
            <React.Fragment>
                <button className="prev" onClick={prevImage}>
                    <i className="fa fa-chevron-left"></i>
                </button>
                <button className="next" onClick={nextImage}>
                    <i className="fa fa-chevron-right"></i>
                </button>
            </React.Fragment>
        )
        }
    </div>
    )
}

export default SlideShow;