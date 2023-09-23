import React from "react";

import "../styles/Collapse.scss"




const Collapse = ({title, content}) => {
    // etat pour cacher ou afficher la description
    const [isCollapsed, setIsCollapsed] = React.useState(true);


     // fonction de gestion des etat d'affichage de la collapse
     const toggleCollapse = () => {
        setIsCollapsed(prevvalue => !prevvalue)
    };

    return (
        <div className="description colapse">
        <h2 className="description-title" onClick={toggleCollapse} >

            <span>{title}</span> <span >
                {isCollapsed ? (<i className="fa fa-chevron-up"></i>) : (<i className="fa fa-chevron-down"></i>)}
            </span>

        </h2>
        <div className={`hidden-content ${isCollapsed ? 'isCollapsed' : ''}`}>
            <div className="content">
                <p>
                    {content}
                </p>
            </div>
        </div>
    </div>
    )
}

export default Collapse;