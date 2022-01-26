import React from "react";
import { Button } from "./styles";

const ButtonSubmit = ({ onClick, text, disabled = false }) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {text}
        </Button>
    );
};

export { ButtonSubmit };
