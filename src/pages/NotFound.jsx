import React from "react";
import { HelmetContainer } from "../components/HelmetContainer";

const NotFound = () => {
    return (
        <HelmetContainer
            title={"Página no encontrada"}
            subtitle={
                "Lo sentimos la página que estas buscando no existe, prueba con otra 😉"
            }
            detail={true}
        ></HelmetContainer>
    );
};

export { NotFound };
