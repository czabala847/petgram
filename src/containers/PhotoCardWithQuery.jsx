import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { PhotoCardLoading } from "../components/PhotoCard/PhotoCardLoading";
import { useQuery, gql } from "@apollo/client";

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
        photo(id: $id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

const PhotoCardWithQuery = ({ id }) => {
    const { loading, data } = useQuery(GET_SINGLE_PHOTO, {
        variables: { id },
    });

    if (loading) return <PhotoCardLoading />;

    return <PhotoCard {...data.photo} />;
};

export { PhotoCardWithQuery };
