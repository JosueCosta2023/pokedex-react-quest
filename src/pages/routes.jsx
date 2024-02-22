import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home/home";
import Profile from "./profile/profile";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/profile/:id" element={<Profile/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes