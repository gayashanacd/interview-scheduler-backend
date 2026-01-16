import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

import mongoose from "mongoose";
import request from "supertest";
import app from "../app";
import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST as string);
  await mongoose.connection.db.collection("users").deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Auth API",() => {
    it("should login successfully with correct credentials", async () => {
        // Create user first
        const password = await bcrypt.hash("mypassword", 10);
        await UserModel.create({ email: "test@example.com", name: "Test User", password: password});

        // Act login
        const res = await request(app)
            .post("/api/auth/login")
            .send({ email: "test@example.com", password: "mypassword"});

        // Check 
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toHaveProperty("token");
    });

    it("should fail login with incorrect password", async () => {
        const res = await request(app)
            .post("/api/auth/login")
            .send({ email: "test@example.com", password: "wrongpassword" });

        expect(res.statusCode).toBe(401);
        expect(res.body.success).toBe(false);
        expect(res.body.message).toBe("Invalid email or password");
    });

    it("should fail login if email does not exist", async () => {
        const res = await request(app)
            .post("/api/auth/login")
            .send({ email: "nonexistent@example.com", password: "any" });

        expect(res.statusCode).toBe(401);
        expect(res.body.success).toBe(false);
        expect(res.body.message).toBe("Invalid email or password");
    });
});