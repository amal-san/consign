const UserController = require('../controllers/user.controller')
const ParcelController = require('../controllers/parcel.controller');
const ClientController = require('../controllers/client.controller');
const Auth  = require('../utils/Auth');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const GraphQlError = () => new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate");



const resolvers = {
    Query: {
        Info: () => `Checking the server is working`,

        Users: async () =>  UserController.Users(),

	    Clients: async () => ClientController.Clients(),

        Login: async (parent, args) => UserController.userLogin(args),

        Parcels: async (parent, args, context) => 
            Auth.validateToken(context) ? ParcelController.Parcels() : GraphQlError(),

        ParcelInfo: async (parent, args ) => ParcelController.findParcelByTrackingId(args),

        DeliveredParcels: async ( parent, args ,context) => ParcelController.findParcelDeliveries(args),
            // Auth.validateToken(context) ? ParcelController.findParcelDeliveries() : GraphQlError(),

    },
    Mutation: {
        createUser : async (parent, args) => UserController.createUser(args),

	    createClient: async (parent, args) => ClientController.createClient(args),

        updateClient: async (parent, args) => ClientController.updateClient(args),

        deleteClient: async ( parent, args) => ClientController.deleteClient(args),

        createParcel : async (parent, args, context) => 
            Auth.validateToken(context) ? ParcelController.createParcel(args) : GraphQlError(),

        updateParcel: async ( parent, args, context) => 
            Auth.validateToken(context) ? ParcelController.updateParcel(args): GraphQlError(),

        deleteParcel: async ( parent , args, context ) => 
            Auth.validateToken(context) ? ParcelController.deleteParcel(args): GraphQlError(),

        

    }
}


module.exports = resolvers;
