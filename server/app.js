const { GraphQLServer } = require('graphql-yoga');
const typeDefs  = require('./graphql/typedef')
const resolvers = require('./graphql/resolvers')

const app = new GraphQLServer({
    typeDefs,
    resolvers,
    context: req => ({ ...req }),
    headers: req => ({...req.headers}),

})

//ladfa


module.exports = app;

