import express from "express";
import cityRoutes from "./routes/cityRoutes.js";
import connectToDatabase from "./database/connectToDatabase.js";

const app = express();

app.use(express.json());

app.use("/api", cityRoutes);

app.listen(8080, async function () {
  try {
    await connectToDatabase();
    console.log("Sever is running on port 8080");
  } catch (error) {
    console.log(error.message);
  }
});
