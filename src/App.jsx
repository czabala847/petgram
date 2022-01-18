import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./GlobalStyle";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <ListOfCategories />
            <ListOfPhotoCards />
        </>
    );
};

export { App };
