import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";

import { Logo } from "../components/Logo";
import { Navbar } from "../components/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Logo />
            {children}
            <Navbar />
        </>
    );
};

export { Layout };
