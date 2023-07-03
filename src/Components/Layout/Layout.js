
import React from "react";
import Routes from "../../Router/Routers.js";
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";


const Layout = () =>{
    return (
        <div>
            <Header />
            <div>
                <Routes />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
