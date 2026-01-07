import express from "express";
import { json } from "body-parser";
import userRoutes from "./routes/user.routes";

const app = express();

// Middleware
app.use(json());

// Routes
app.use("/api/users", userRoutes);

// Health check route
app.get("/api/health", (req, res)=>{
    res.status(200).json({ status: "ok" });
});

export default app;