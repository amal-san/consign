const { GraphQLServer } = require('graphql-yoga');
const typeDefs  = require('./graphql/typedef')
const resolvers = require('./graphql/resolvers')

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))


// module.exports = app;

