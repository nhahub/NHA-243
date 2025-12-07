import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";
import client from "prom-client";
dotenv.config();
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

app.use("/user", userRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);



// Create a Registry to register the metrics
const register = new client.Registry();

// Add a default metrics collection
client.collectDefaultMetrics({ register });

app.get("/metrics", async (req, res) => {
  res.setHeader("Content-Type", register.contentType);
  res.send(await register.metrics());
});

export default app;
