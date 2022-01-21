import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./styles";

const FavButton = ({ toggleLike, liked, likes }) => {
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return (
        <Button onClick={toggleLike}>
            <Icon size={"32px"} />
            {likes} likes
        </Button>
    );
};

export { FavButton };
