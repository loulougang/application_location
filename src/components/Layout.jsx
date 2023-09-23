import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.scss"

const Layout = ({children}) => {
    return (
    
       <div className="page-content">

        <div className="layout">
         <Header/>

        {children}
       </div>

        <Footer/>
       </div>
    )
}

export default Layout;