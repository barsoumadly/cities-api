import dotenv from "dotenv";

dotenv.config();

const envVariables = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
};

export default envVariables;
