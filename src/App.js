import React from "react";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { createGlobalStyle } from "styled-components";
import Router from "./route";
import globalStyle from "./index.css";

const GlobalStyle = createGlobalStyle`${globalStyle}`;

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Router />
    </ApolloProvider>
  );
}

export default App;
