const typeDefs = `

type Mutation {
	createUser(username:String! password:String! details:String): [LoginUserType]!
	userUpdate(username:String! password:String!): UserType!
	userDelete(username:String! password:String!): UserType!
    createParcel(name:String! weight:String! receiver:String! sender:String! created_at:String): ParcelType!
    updateParcel(tracking_id:String! name:String weight:String receiver:String sender:String tracking_details:String status:Boolean): ParcelType!
    deleteParcel(tracking_id:String!): ParcelType!
}

type LoginUserType {
    id:String!
    username:String!
    details:String
    token:String
}

type UserType {
	_id:String!
	username:String!
	password:String!
    details:String
}
type ParcelType {
	_id:String!
	name:String!
	weight:String!
    receiver:String!
    sender:String!
    created_at:String
    status:Boolean
    tracking_id:String
    tracking_details:[String]
}


type Query {
  Info: String!
  Users: [UserType]!
  Login(username:String! password:String!):[LoginUserType]!
  ParcelInfo(tracking_id:String!):ParcelType
  Parcels: [ParcelType]!
  DeliveredParcels: [ParcelType]
}
`

module.exports = typeDefs;