import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import { Logo } from "./components/Logo";

const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detailId = urlParams.get("detail");

    return (
        <>
            <GlobalStyle />
            <Logo />
            {detailId ? (
                <PhotoCardWithQuery id={detailId} />
            ) : (
                <>
                    <ListOfCategories />
                    <ListOfPhotoCards category_id={1} />
                </>
            )}
        </>
    );
};

export { App };
