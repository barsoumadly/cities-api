import express from "express";
import cityRoutes from "./routes/cityRoutes.js";
import connectToDatabase from "./database/connectToDatabase.js";
import envVariables from "./config/envVariables.js";

const app = express();
const port = envVariables.PORT || 8000;

app.use(express.json());

app.use("/api", cityRoutes);

app.listen(port, async function () {
  try {
    await connectToDatabase();
    console.log(`Sever is running on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
