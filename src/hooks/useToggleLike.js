import React from "react";
import { gql, useMutation } from "@apollo/client";

const MUTATION_LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

const useToggleLike = () => {
  const [mutateToggle] = useMutation(MUTATION_LIKE_PHOTO);

  return { mutateToggle };
};

export { useToggleLike };
