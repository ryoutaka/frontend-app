import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://backend-api-3623.herokuapp.com/grahql",
});

client
  .query({
    query: gql`
      {
        dancers {
          id
          name
          weight
        }
      }
    `,
  })
  .then((result) => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
