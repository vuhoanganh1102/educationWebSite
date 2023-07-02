


import Home from "../pages/Home";
import Signin from "../pages/Signin";
import CreateField from "../pages/CreateField";

import { Routes, Route, Navigate } from "react-router-dom";


const Routers = () =>{
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/educationWebSite" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/createfield" element={<CreateField />} />
        </Routes>
    )
} 

export default Routers;