import React from 'react';
import { ClipLoader } from 'react-spinners';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Todo from './Todo';

const GET_TODOS = gql`
  query {
    todos {
      id
      title
      completed
    }
  }
`;

function Todos({ data: { loading, todos } }) {
  if (loading) return <ClipLoader sizeUnit="px" size={45} color="#123abc" />;
  return (
    <div className="container p-5">
      <h1 className="text-primary mb-3">Todos App</h1>
      {!todos && <p className="text-danger">Empty...</p>}
      {todos && todos.map(todoData => <Todo data={todoData} key={todoData.id} />)}
    </div>
  );
}

export default graphql(GET_TODOS)(Todos);
