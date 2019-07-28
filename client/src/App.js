import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './graphql';
import { Todos } from './components';

function App() {
  return (
    <ApolloProvider client={client}>
      <Todos />
    </ApolloProvider>
  );
}

export default App;
