import React from "react";

import "../styles/Error.scss";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="error-content">
            <h1><span>4</span><span>0</span><span>4</span></h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <p><Link to={`/`}>Retourner sur la page d’accueil</Link></p>
        </div>
    )
}

export default Error;