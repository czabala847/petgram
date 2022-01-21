import React from "react";
import { ImgWrapper, ImgLoading, Article } from "./styles";

const PhotoCardLoading = () => {
    return (
        <Article>
            <ImgWrapper>
                <ImgLoading />
            </ImgWrapper>
        </Article>
    );
};

export { PhotoCardLoading };
