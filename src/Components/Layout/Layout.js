

import Routes from "../../Router/Routers";
import Header from "../header/Header";
import Footer from "../footer/Footer";


const Layout = () =>{
    return (
        <div>
            <Header />
            <div>
                <Routes />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
