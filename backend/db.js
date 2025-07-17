import {MongoClient} from 'mongodb'

import dotenv from 'dotenv'

dotenv.config()

let db;

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri)

export async function connectDB(){
   await client.connect()
   db= client.db("EmployeeDirectoryApp")
   console.log("Connected to mongoDB")
}
//Since the use of db is sure for outside files like resolvers,schema etc so we exporting from here
export function getDB(){
  return db;
}

