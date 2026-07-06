import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api",);
const PORT = Number(process.env.PORT);
const DATABASE_URL = process.env.DATABASE_URL;
if(!PORT || !DATABASE_URL) {
  throw new Error("PORT or DATABASE_URL is not defined in the environment variables.");
}
const startServer = async () => {
  try {
    await mongoose.connect(`${DATABASE_URL}`);
    console.log("MongoDB connected");
    app.listen(PORT);
  } catch (error: unknown) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error(error);
    }
}
};

startServer();