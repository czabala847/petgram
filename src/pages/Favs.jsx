import React from "react";
import { ListOfFavorites } from "../components/ListOfFavorites";
import { HelmetContainer } from "../components/HelmetContainer";

const Favs = () => {
    return (
        <HelmetContainer
            title={"Tus favoritos"}
            subtitle={
                "Aquí encontraras a las mascotas que les has dado favorito!!!"
            }
            detail={true}
        >
            <ListOfFavorites />
        </HelmetContainer>
    );
};

export { Favs };
