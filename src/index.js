import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context";
import { App } from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  from,
  HttpLink,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = sessionStorage.getItem("token");

  if (token) {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  }
  return forward(operation);
});

// { networkError }
const errorMiddleware = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    const errorLoggin = graphQLErrors.filter(
      (error) =>
        error.message === "you must be logged in to perform this action"
    );

    if (errorLoggin.length > 0) {
      sessionStorage.removeItem("token");
      window.location = "/user";
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: "https://petgram-server-clgg.vercel.app/graphql",
    }),
  ]),
});

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.querySelector("#main")
);
