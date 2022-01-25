import React from "react";

import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const useGetPhotos = (categoryId) => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: { categoryId },
  });

  return { loading, error, data };
};

export { useGetPhotos };
