import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function seedData() {
  try {
    await client.connect();
    const db = client.db("EmployeeDirectoryApp");
    const employees = db.collection("employees");

    // Clear existing data
    await employees.deleteMany({});

    // Insert new data
    const result = await employees.insertMany([
      { name: "Nave Johnson", position: "Software Engineer", department: "Engineering", salary: 70000 },
      { name: "Bob Smith", position: "Product Manager", department: "Product", salary: 80000 },
      { name: "Carol Lee", position: "Designer", department: "Design", salary: 65000 },
      { name: "David Kim", position: "DevOps Engineer", department: "Engineering", salary: 75000 },
      { name: "Eva Chen", position: "UX Researcher", department: "Design", salary: 68000 },
    ]);

    console.log(`✅ Seeded ${result.insertedCount} employees.`);
  } catch (error) {
    console.error("❌ Seeding error:", error);
  } finally {
    await client.close();
  }
}

seedData();