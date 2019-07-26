import { makeExecutableSchema } from 'graphql-tools';
import { todoSchema } from './todo';

export const schema = makeExecutableSchema({
  typeDefs: [
    todoSchema.typeDefs
  ],
  resolvers: [
    todoSchema.resolvers
  ]
});
