import React from "react";

import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";
import { useParams } from "react-router";
import { HelmetContainer } from "../components/HelmetContainer";
const Home = () => {
    const params = useParams();
    return (
        <HelmetContainer
            title={"Tu app de fotos de mascotas"}
            subtitle={
                "Con Petgram puedes encontrar fotos de animales domésticos muy bonitos!!!"
            }
        >
            <ListOfCategories />
            <ListOfPhotoCards category_id={params.categoryId} />
        </HelmetContainer>
    );
};

export { Home };
