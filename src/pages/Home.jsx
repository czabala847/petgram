import React from "react";

import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { ListOfCategories } from "../components/ListOfCategories";
import { useParams } from "react-router";
const Home = () => {
    const params = useParams();
    return (
        <>
            <ListOfCategories />
            <ListOfPhotoCards category_id={params.categoryId} />
        </>
    );
};

export { Home };
