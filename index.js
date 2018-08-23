import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 4001 }, () => console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`));
