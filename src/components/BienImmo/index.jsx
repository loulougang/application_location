import React from "react";
import BienCard from "./BienCard";
import "../../styles/BienImmo.scss"


const BienImmo = ({biensImmo}) => {
    return (
        <div className="container">
            <div className="BienImmo_items">
                
                {biensImmo.map(items => (
                    <BienCard bien={items} key={items.id}/>
                ))}
            </div>
        </div>
    )
}


export default BienImmo;