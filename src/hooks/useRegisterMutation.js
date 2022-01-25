import React from "react";
import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const useRegisterMutation = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER);

  return { register, loading, error };
};

export { useRegisterMutation };
