import React from "react";
import "../styles/Apropos.scss";
import aproposbannerimage from "../assets/images/apropos.png"
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import useAbout from "../hooks/useAbout";

const Apropos = () => {


  // Réccupération des textes de apropos
  const { aboutTexts } = useAbout()

    return (
        <React.Fragment>
             
             <Banner bgImage={aproposbannerimage} />

            <div className="apropos-content">
            {/* colapse 1 */}

            <div className="dropmenu">

                {aboutTexts.map(text =>(
                <Collapse key={text.title} title={text.title} content={text.description} />

                ))}
        </div>
            </div>
       

        </React.Fragment>
    )
}

export default Apropos;