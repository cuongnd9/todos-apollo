import { gql } from 'apollo-server-express';
import { TodoService } from '../services';

const typeDefs = gql`
    type Query {
        todos: [Todo]
        todo(id: String!): Todo
    }
    type Mutation {
        createTodo(title: String): Todo
        updateTodo(id: String!, title: String!, completed: Boolean!): Todo
        deleteTodo(id: String!): Todo
    }
    type Todo {
        id: String!
        title: String
        completed: Boolean!
    }
`;

const resolvers ={
    Query: {
        todos: () => TodoService.list(),
        todo: (_, { id }) => TodoService.retrieve(id)
    },
    Mutation: {
        createTodo: (_, { title }) => TodoService.create({ title }),
        updateTodo: (_, { id, title, completed }) => TodoService.update({ id, title, completed }),
        deleteTodo: (_, { id }) => TodoService.destroy(id) 
    }
}

export const todoSchema = {
    typeDefs,
    resolvers
};
