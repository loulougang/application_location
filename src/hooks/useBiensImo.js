import React from "react";
import db from "../assets/db.json"

// Hook personnalisé pour récupérer les données des utilisateurs
function useBiensImo() {
    const [biensImmo,setBiensImmo] = React.useState([])

  React.useEffect(() => {
    setBiensImmo(db)
},[])
  // Fonction pour récupérer un utilisateur par son ID
  const getBienImoById = (bienId) => {
    return biensImmo.find((bien) => bien.id === bienId);
  };

  return { biensImmo, getBienImoById };
}

export default useBiensImo;
