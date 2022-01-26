import React from "react";
import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery";
import { useParams } from "react-router-dom";

import { HelmetContainer } from "../components/HelmetContainer";

const Detail = () => {
    const params = useParams();
    return (
        <HelmetContainer title={`Detalle # ${params.detailId}`} detail={true}>
            <PhotoCardWithQuery id={params.detailId} />
        </HelmetContainer>
    );
};

export { Detail };
