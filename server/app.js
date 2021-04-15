const { GraphQLServer } = require('graphql-yoga');
const typeDefs  = require('./graphql/typedef')
const resolvers = require('./graphql/resolvers')

const app = new GraphQLServer({
    typeDefs,
    resolvers,
})

module.exports = app;

