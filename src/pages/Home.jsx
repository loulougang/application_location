import React from "react";
import Banner from "../components/Banner";
import BienImmo from "../components/BienImmo";
import useBiensImo from "../hooks/useBiensImo";
import BannerImages from "../assets/images/IMG.png"


const Home = () => {
  const { biensImmo } = useBiensImo()

  const bannerText = "Chez vous, partout et ailleurs"
    return (
  
           <React.Fragment>
             <Banner bgImage={BannerImages} text={bannerText}/>
            <BienImmo biensImmo={biensImmo}/>
           </React.Fragment>
      
    )
}

export default Home;