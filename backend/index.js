import { ApolloServer } from 'apollo-server'
import {connectDB} from './db.js'
import {typeDefs} from './schema.js'
import {resolvers} from './resolvers.js'


const startServer = async() =>{
  await connectDB()

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  server.listen().then(({url})=>{
    console.log(`server is running on ${url}`)

  })
}

startServer();