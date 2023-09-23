import React from "react";
import "../styles/Banner.scss"

const Banner = ({bgImage,text}) => {
    return (

        <div className="banner">
                <img alt="banner"src={bgImage}/>
                <div className="opacity"></div>
                {text && <h1>{text}</h1>}
        </div>
        
    )
}

export default Banner;