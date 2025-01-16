import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import errorHandler from "./utils/errorHandler";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));


app.use(express.json());


app.use("/api/users", userRoutes);


app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});