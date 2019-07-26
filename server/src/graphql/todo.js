import { gql } from 'apollo-server-express';
import { TodoService } from '../services';

const typeDefs = gql`
    type Query {
        todos: [Todo]
        todo(id: Int!): Todo
    }
    type Mutation {
        createTodo(title: String): Todo
        updateTodo(id: Int!, title: String, completed: Boolean): Todo
        deleteTodo(id: Int!): Todo
    }
    type Todo {
        id: Int!
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
