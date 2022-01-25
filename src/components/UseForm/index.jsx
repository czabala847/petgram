import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Container, Title } from "./styles";
import { MdPets } from "react-icons/md";

const UseForm = ({ onSubmit, title }) => {
    const email = useInputValue("");
    const password = useInputValue("");

    return (
        <Container>
            <MdPets size={"5rem"} />
            <Title>{title}</Title>
            <Form onSubmit={onSubmit}>
                <Input type="email" placeholder="Email" {...email} />
                <Input type="password" placeholder="Password" {...password} />
                <Button>{title}</Button>
            </Form>
        </Container>
    );
};

export { UseForm };
