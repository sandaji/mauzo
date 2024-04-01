import mongoose from "mongoose";

async function dbConnect() {
  try {
    const mongodbUri = process.env.MONGODB_URI;
    if (!mongodbUri) {
      throw new Error("MONGODB_URI environment variable is not defined.");
    }
    await mongoose.connect(mongodbUri);
  } catch (error) {
    throw new Error("Connection failed!");
  }
}

export default dbConnect;
