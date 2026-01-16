import express from "express";
import { json } from "body-parser";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import pingRoute from "./routes/ping.routes"
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

// Middleware
app.use(json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

//Basic Server Health Check health check
app.use("/api/ping", pingRoute);

// Health check route to server is up
app.get("/api/health", (req, res)=>{
    res.status(200).json({ status: "ok" });
});

// Error middleware 
app.use(errorMiddleware);

export default app;