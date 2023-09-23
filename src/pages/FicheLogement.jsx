import React from "react";
import "../styles/FicheLogement.scss";
import {  useNavigate, useParams } from "react-router";
import useBiensImo from "../hooks/useBiensImo";
import Collapse from "../components/Collapse";
import SlideShow from "../components/SlideShow";

const FicheLogement = () => {

    let navigate = useNavigate();

    // reccuperation de l'id du b ien dans l'url par le paramètre "id"
    const { id } = useParams();

    // fonction de réccupération d'un bien par son id
    const { getBienImoById } = useBiensImo()

    const [bienimages, setBienImages] = React.useState([])

    const [isLoading, setIsloading] = React.useState(true);


    // reccuperation d'un bien par son id passé dans l'url
    const bien = getBienImoById(id);

    React.useEffect(() => {

        // si non trouvons le bien, on met à jour le state qui stock les images du bien
        if (bien) {
            setBienImages(bien.pictures)
        }
        setIsloading(false)

    }, [bien])


    // chargement des données du bien
    if (isLoading) {
        return (<div className="fiche-logement-content">
            <p className="loading"> Chargement.......</p>
        </div>
        )
    }

    // en cas de bien non trouvé, redirection vers la page 404
    if (!bien) {
        return navigate("/not-found");
    }

    return (
        <div className="fiche-logement-content">


          <SlideShow images={bienimages} />

            <div className="details-biens">
                <div className="info-bien">
                    <h1 className="titre">{bien.title}</h1>
                    <p><small>{bien.location}</small></p>
                </div>

                <div className="info-host">
                    <div className="personnal-info">
                        <div className="name">
                            <p>{bien.host.name}</p>
                        </div>
                        <div className="avatar">
                            <img src={bien.host.picture} alt={`bien de ${bien.host.name}`} />
                        </div>

                    </div>
                    <div className="ratting">

                        {[1, 2, 3, 4, 5].map((index) => (
                            <span key={index} className={`${index <= Number(bien.rating)
                                    ? index < Number(bien.rating)
                                        ? "checked"
                                        : ""
                                    : ""
                                }`}>
                                <i

                                    className={`fa fa-star `}
                                ></i>
                            </span>
                        ))}


                    </div>

                </div>
            </div>

            {/* actions */}

            <div className="mores-info">
                <div className="tags">
                    {bien.tags.map(tag => (
                        <span key={tag}>{tag}</span>

                    ))}

                </div>


            </div>

            {/* description */}


            <div className="dropmenu">

                <Collapse title={`Description`} content={bien.description} />
                <Collapse title={`Equipements`} content={bien.equipments.map(equipment => (
                                <span key={equipment}><span >{equipment}</span><br /></span>
                            ))} />
                
                

            </div>
        </div>
    );
};

export default FicheLogement;
