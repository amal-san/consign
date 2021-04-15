const UserController = require('../controllers/user.controller')

const resolvers = {
    Query: {
        Info: () => `Checking the server is working`,
        Users: async () =>  UserController.Users(),
        Login: async (parent, args) => UserController.userLogin(args),
    },
    Mutation: {
        createUser : async (parent, args) => UserController.createUser(args),

    }
}


module.exports = resolvers;