import React from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";

import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMG =
    "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
    const articleRef = React.useRef(null);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const { isIntersecting } = entries[0];
            if (isIntersecting) {
                console.log("si");
                setShow(true);
                observer.disconnect();
            }
        });

        observer.observe(articleRef.current);
    }, [articleRef]);

    return (
        <Article ref={articleRef}>
            {show && (
                <>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img
                                loading="lazy"
                                src={src}
                                alt={`Imagen ${id}`}
                            />
                        </ImgWrapper>
                    </a>

                    <Button>
                        <MdFavoriteBorder size={"32px"} />
                        {likes} likes
                    </Button>
                </>
            )}
        </Article>
    );
};

export { PhotoCard };
