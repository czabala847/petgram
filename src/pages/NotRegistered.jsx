import React from "react";
import { Context } from "../Context";

const NotRegistered = () => {
    const { activeAuth } = React.useContext(Context);

    return (
        <form onSubmit={activeAuth}>
            <button>Iniciar sesión</button>
        </form>
    );
};

export { NotRegistered };
