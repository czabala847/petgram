import React from "react";

import { PhotoCardLoading } from "../PhotoCard/PhotoCardLoading";
import { PhotoCard } from "../PhotoCard";
import { useGetPhotos } from "./useGetPhotos";

const ListOfPhotoCards = ({ category_id }) => {
    const { loading, error, data } = useGetPhotos(category_id);

    if (loading) return <PhotoCardLoading />;
    if (error) return <p>Error...</p>;

    return (
        <ul>
            {data.photos.map((photo) => (
                <PhotoCard key={photo.id} id={photo.id} {...photo} />
            ))}
        </ul>
    );
};

export { ListOfPhotoCards };
