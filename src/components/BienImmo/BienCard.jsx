import React from "react";
import { Link } from "react-router-dom";

const BienCard = ({bien}) => {
    return (
       <div className="CartItem">

       <img alt="banner" src={bien.cover}/>
            <div className="opacity">
                <Link to={`/FicheLogement/${bien.id}`}></Link>
            </div>
            <h1>
            <Link to={`/FicheLogement/${bien.id}`}>{bien.title}</Link></h1>


       </div> 

    )
}

export default BienCard;