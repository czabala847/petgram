import React from "react";
import { Context } from "../../Context";
import { UseForm } from "../../components/UseForm";
import { useRegisterMutation } from "../../hooks/useRegisterMutation";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { HelmetContainer } from "../../components/HelmetContainer";
import { Paragraph, Link } from "./styles";

const NotRegistered = () => {
    const { activeAuth } = React.useContext(Context);
    const [showLogin, setShowLogin] = React.useState(false);

    const {
        register,
        loading: loadingReg,
        error: errorReg,
    } = useRegisterMutation();

    const { login, loading: loadingLog, error: errorLog } = useLoginMutation();

    const handleRegister = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        register({ variables })
            .then(({ data }) => {
                const { signup } = data;
                activeAuth(signup);
            })
            .catch((error) => console.log(error.graphQLErrors[0].message));
    };

    const handleLogin = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        login({ variables })
            .then(({ data }) => {
                const { login } = data;
                activeAuth(login);
            })
            .catch((error) => console.log(error.graphQLErrors[0].message));
    };

    const errorRegMs = errorReg && "El usuario ya existe o hay algún problema.";
    const errorLogMs = errorLog && "El correo o contraseña son incorrectos.";

    const handleClick = () => {
        setShowLogin(!showLogin);
    };

    return (
        <>
            {showLogin ? (
                <HelmetContainer title={"Iniciar sesión"}>
                    <UseForm
                        disabled={loadingLog}
                        error={errorLogMs}
                        onSubmit={handleLogin}
                        title={"Iniciar Sesión"}
                    />
                    <Paragraph>
                        No tienes una cuenta?{" "}
                        <Link onClick={handleClick}>Registraté</Link>
                    </Paragraph>
                </HelmetContainer>
            ) : (
                <HelmetContainer title={"Registraté"}>
                    <UseForm
                        disabled={loadingReg}
                        error={errorRegMs}
                        onSubmit={handleRegister}
                        title={"Registraté"}
                    />
                    <Paragraph>
                        Ya tienes una cuenta?{" "}
                        <Link onClick={handleClick}>Iniciar sesión</Link>
                    </Paragraph>
                </HelmetContainer>
            )}
        </>
    );
};

export { NotRegistered };
