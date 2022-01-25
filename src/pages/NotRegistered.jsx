import React from "react";
import { Context } from "../Context";
import { UseForm } from "../components/UseForm";
import { useRegisterMutation } from "../hooks/useRegisterMutation";

const NotRegistered = () => {
    const { activeAuth } = React.useContext(Context);
    const { register, loading, error } = useRegisterMutation();

    const handleSubmit = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        register({ variables })
            .then(activeAuth)
            .catch((error) => console.log(error.graphQLErrors[0].message));
    };

    const errorMsg = error && "El usuario ya existe o hay algún problema.";

    return (
        <>
            <UseForm onSubmit={handleSubmit} title={"Iniciar Sesión"} />
            <UseForm
                disabled={loading}
                error={errorMsg}
                onSubmit={handleSubmit}
                title={"Registraté"}
            />
        </>
    );
};

export { NotRegistered };
