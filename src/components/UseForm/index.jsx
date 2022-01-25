import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import {
    Form,
    Input,
    Button,
    Container,
    Title,
    ErrorContainer,
} from "./styles";
import { MdPets } from "react-icons/md";

const UseForm = ({ disabled, error, onSubmit, title }) => {
    const email = useInputValue("");
    const password = useInputValue("");

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({ email: email.value, password: password.value });
    };

    return (
        <Container>
            <MdPets size={"5rem"} />
            <Title>{title}</Title>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Input
                    disabled={disabled}
                    type="email"
                    placeholder="Email"
                    {...email}
                />
                <Input
                    disabled={disabled}
                    type="password"
                    placeholder="Password"
                    {...password}
                />
                <Button disabled={disabled}>{title}</Button>
                {error && <ErrorContainer>{error}</ErrorContainer>}
            </Form>
        </Container>
    );
};

export { UseForm };
