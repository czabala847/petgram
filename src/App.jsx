import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Detail } from "./pages/Detail";

import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Logo />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/pet/:categoryId" element={<Home />} />
                <Route exact path="/detail/:detailId" element={<Detail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export { App };
