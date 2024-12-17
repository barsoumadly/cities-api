import mongoose from "mongoose";
import envVariables from "../config/envVariables.js";

const connectToDatabase = async function () {
  try {
    const connection = await mongoose.connect(envVariables.MONGO_URI);
    console.log(
      `Database is connected successfull on ${connection.connection.host}`
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default connectToDatabase;
