// graphqlServer.js
const { ApolloServer, gql } = require('apollo-server');

// Definir el esquema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Resolver
const resolvers = {
  Query: {
    hello: () => 'Hola, Mundo!',
  },
};

// Crear servidor
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciar servidor
server.listen().then(({ url }) => {
  console.log(`Servidor GraphQL listo en ${url}`);
});
