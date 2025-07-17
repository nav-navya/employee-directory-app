import { ObjectId } from 'mongodb';
import {getDB} from './db.js'

export const resolvers = {
  Query:{
    getAllEmployees: async () => {
      const db = getDB();
      const employees = await db.collection("employees").find().toArray();
      return employees.map(({ _id, ...rest }) => ({ id: _id, ...rest }));
    },

    
    getEmployeeDetails: async (_, { id }) => {
      const db = getDB();
      try {
        const employee = await db.collection("employees").findOne({ _id: new ObjectId(id) });
        if (!employee) return null;
        const { _id, ...rest } = employee;
        return { id: _id, ...rest };
      } catch (error) {
        throw new Error("Invalid Employee ID");
      }
    },
    getEmployeesByDepartment: async (_, { department }) => {
      const db = getDB();
      const employees = await db.collection("employees").find({ department }).toArray();
      return employees.map(({ _id, ...rest }) => ({ id: _id, ...rest }));
    },
  },
  
      Mutation: {
    addEmployee: async (_, { name, position, department, salary }) => {
      const db = getDB();
      const result = await db.collection("employees").insertOne({
        name,
        position,
        department,
        salary,
      });
      return { id: result.insertedId, name, position, department, salary };
    },}



  
  
}