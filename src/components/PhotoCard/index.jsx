import React from "react";
import { Link } from "react-router-dom";
import { ImgWrapper, Img, Article } from "./styles";

import { FavButton } from "../FavButton";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useToggleLike } from "../../hooks/useToggleLike";

const DEFAULT_IMG =
    "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
    const key = `liked-${id}`;
    const [liked, setLiked] = useLocalStorage(key, false);
    const [show, articleRef] = useNearScreen();
    const { mutateToggle } = useToggleLike();

    const toggleLikeCard = () => {
        setLiked(!liked);

        if (!liked) {
            mutateToggle({ variables: { input: { id } } });
        }
    };

    return (
        <Article ref={articleRef}>
            {show && (
                <>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img
                                loading="lazy"
                                src={src}
                                alt={`Imagen ${id}`}
                            />
                        </ImgWrapper>
                    </Link>

                    <FavButton
                        liked={liked}
                        likes={likes}
                        toggleLike={toggleLikeCard}
                    />
                </>
            )}
        </Article>
    );
};

export { PhotoCard };
