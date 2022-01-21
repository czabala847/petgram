import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Logo />
            <ListOfCategories />
            <ListOfPhotoCards category_id={1} />
        </>
    );
};

export { App };
