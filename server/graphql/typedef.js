const typeDefs = `

type Mutation {
	userAdd(username:String! password:String!): UserType!
	userUpdate(username:String! password:String!): UserType!
	userDelete(username:String! password:String!): UserType!
    parcelAdd(name:String! weight:String! details_of_reciever:String! details_of_sender:String!): ParcelType!
    parcelUpdate(tracking_id:String!): ParcelType!
    parcelDelete(tracking_id:String!): ParcelType!
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
    details_of_reciver:String!
    details_of_sender:String!
    created_at:String
    deliver_status:Boolean
    tracking_id:String
    tracking_details:String
}


type Query {
  Info: String!
  Users: [UserType]!
  Parcels: [ParcelType]!
  ParcelInfo(tracking_id:String!):ParcelType
  DeliverdParcels: [ParcelType]
}
`

module.exports = typeDefs;