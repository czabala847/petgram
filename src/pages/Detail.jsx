import React from "react";
import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery";
import { useParams } from "react-router-dom";

const Detail = () => {
    const params = useParams();
    return <PhotoCardWithQuery id={params.detailId} />;
};

export { Detail };
