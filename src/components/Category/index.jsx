import React from "react";
import { Link, Image } from "./styles";
// import { Link } from "react-router-dom";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

const Category = ({ cover = DEFAULT_IMAGE, path = "/", emoji = "?" }) => {
    return (
        <Link to={path}>
            <Image src={cover} alt="cover" />
            {emoji}
        </Link>
    );
};

export { Category };
