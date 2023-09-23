import React from "react";

import "../styles/Footer.scss"
import logo from '../assets/images/footer_logo.png';




const Footer = () => {
    return (
        <footer className="footer">
        <div className="logo">
            <img src={logo} alt="Logo de l'entreprise" />
        </div>
        <div className="copyright">
            &copy; 2020 Kasa. All rights reserved.
        </div>
    </footer>
    )
}

export default Footer;