import React from "react";
import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const useLoginMutation = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);

  return { login, loading, error };
};

export { useLoginMutation };
