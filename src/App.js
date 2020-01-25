import React from "react";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Router from "./route";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
