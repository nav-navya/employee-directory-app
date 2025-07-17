import {gql} from 'apollo-server'

//Schema defines the structure data

export const typeDefs = gql`
type Employee {
  id: ID!
  name:String!,
  position:String!,
  department:String!
  salary:Int!
}
type Query {
  getAllEmployees: [Employee]!
  getEmployeeDetails(id:ID):Employee
  getEmployeesByDepartment(department: String!): [Employee!]!
}
type Mutation {
  addEmployee(name: String!, position: String!, department: String!, salary: Int!): Employee!

}
`