import React from "react";

import { Context } from "../Context";
import { ButtonSubmit } from "../components/ButtonSubmit";
import { HelmetContainer } from "../components/HelmetContainer";

const User = () => {
    const { removeAuth } = React.useContext(Context);

    return (
        <HelmetContainer
            title={"Usuario"}
            subtitle={"Aquí podras gestionar tu cuenta de usuario!!!😎"}
            detail={true}
        >
            <ButtonSubmit
                text={"Cerrar sesión"}
                onClick={removeAuth}
            ></ButtonSubmit>
        </HelmetContainer>
    );
};

export { User };
