import React from "react";

import { Context } from "../Context";
import { ButtonSubmit } from "../components/ButtonSubmit";

const User = () => {
    const { removeAuth } = React.useContext(Context);

    return (
        <>
            <h1>User</h1>
            <ButtonSubmit
                text={"Cerrar sesión"}
                onClick={removeAuth}
            ></ButtonSubmit>
        </>
    );
};

export { User };
