const UserController = require('../controllers/user.controller')
const ParcelController = require('../controllers/parcel.controller');
const Auth  = require('../utils/Auth');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const resolvers = {
    Query: {
        Info: () => `Checking the server is working`,

        Users: async () =>  UserController.Users(),

        Login: async (parent, args) => UserController.userLogin(args),

        Parcels: async () => ParcelController.Parcels(),

        ParcelInfo: async (parent, args ) => ParcelController.findParcelByTrackingId(args),


        DeliveredParcels: async ( parent, args ,context) => 
        // Auth.validateToken(context) ? 
        ParcelController.findParcelDeliveries() 
        // : new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate")

    },
    Mutation: {
        createUser : async (parent, args) => UserController.createUser(args),
        createParcel : async (parent, args, context) => ParcelController.createParcel(args),
            // Auth.validateToken(context) === true ? ParcelController.createParcel(args) : null,
        updateParcel: async ( parent, args, context) => 
            ParcelController.updateParcel(args),
        deleteParcel: async ( parent , args, context ) => 
            ParcelController.deleteParcel(args),

        

    }
}


module.exports = resolvers;