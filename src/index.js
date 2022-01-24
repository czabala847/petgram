import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context";
import { App } from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://petgram-server-clgg.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.querySelector("#main")
);
