import React from "react";
import logo from '../assets/images/kasa.png';
import "../styles/Header.scss"
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (

        <header className="header">
        <div className="logo">
        <Link  to={`/`}>
            <img src={logo} alt="Logo de l'entreprise" />
            </Link>
        </div>


        <nav className="menu">
            <ul>
            <li>
            <NavLink  to={`/`} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>
            Accueil

            </NavLink>
            </li>
           <li><NavLink  to={`/Apropos`} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>
           A Propos

            </NavLink></li>
            </ul>
        </nav>
    </header>


       
    )
}

export default Header;