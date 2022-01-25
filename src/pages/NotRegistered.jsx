import React from "react";
import { Context } from "../Context";
import { UseForm } from "../components/UseForm";

const NotRegistered = () => {
    const { activeAuth } = React.useContext(Context);

    return (
        <>
            <UseForm onSubmit={activeAuth} title={"Iniciar Sesión"} />
            <UseForm onSubmit={activeAuth} title={"Registraté"} />
        </>
    );
};

export { NotRegistered };
