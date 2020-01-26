import React from "react";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { createGlobalStyle } from "styled-components";
import Router from "./route";
import globalStyle from "./index.css";
import { GRAPHQL_HOST } from "./constants/uri";

const GlobalStyle = createGlobalStyle`${globalStyle}`;

const client = new ApolloClient({
  uri: GRAPHQL_HOST,
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
