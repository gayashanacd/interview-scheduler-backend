import express from "express";
import { json } from "body-parser";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import pingRoute from "./routes/ping.routes"
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

// Cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Middleware
app.use(json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//Basic Server Health Check health check
app.use("/api/ping", pingRoute);

// Health check route to server is up
app.get("/api/health", (req, res)=>{
    res.status(200).json({ status: "ok" });
});

// Error middleware 
app.use(errorMiddleware);

export default app;