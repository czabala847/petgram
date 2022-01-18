import React from "react";
import { ImgWrapper, Img, Button } from "./styles";

import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMG =
    "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
    return (
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src} alt={`Imagen ${id}`} />
                </ImgWrapper>
            </a>

            <Button>
                <MdFavoriteBorder size={"32px"} />
                {likes} likes
            </Button>
        </article>
    );
};

export { PhotoCard };
