import React from "react";
import db from "../assets/about.json"

// Hook personnalisé pour récupérer les données des utilisateurs
function useAbout() {
    const [aboutTexts,setAboutTexts] = React.useState([])

  React.useEffect(() => {
    setAboutTexts(db)
},[])
 

  return { aboutTexts };
}

export default useAbout;
