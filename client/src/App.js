import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Todos } from './components';

const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Todos />
    </ApolloProvider>
  );
}

export default App;
