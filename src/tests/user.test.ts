import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

import mongoose from "mongoose";
import request from "supertest";
import app from "../app";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST as string);
  await mongoose.connection.db.collection("users").deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("User API", () => {
    it("should create a new user", async() => {
        const res = await request(app)
            .post("/api/users")
            .send({ email: "test@example.com", name: "Test User"});

        expect(res.statusCode).toBe(201);
        expect(res.body.success).toBe(true);
    }, 10000);

    it("should fail if email already exists", async () => {
        const res = await request(app)
            .post("/api/users")
            .send({ email: "test@example.com", name: "Test User" });

        expect(res.statusCode).toBe(409);
    }, 10000);

    it("should return all users", async() => {
        const res = await request(app).get("/api/users");

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data.length).toBe(1);
    }, 10000);

    // Edge case
    it("should return an empty array when users are empty", async() => {
        await mongoose.connection.db.collection("users").deleteMany({});
        const res = await request(app).get("/api/users");
        expect(res.statusCode).toBe(200);
        expect(res.body.data).toStrictEqual([]);
    });

    it("should fail validation", async () => {
        const res = await request(app)
            .post("/api/users")
            .send({ email: "not-an-email" });

        expect(res.statusCode).toBe(400);
    });

    it("should return 404 if user does not exist", async()=>{
        const fakeId = "507f1f77bcf86cd799439011";
        const res = await request(app).get(`/api/users/${fakeId}`);

        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty("success", false);
        expect(res.body).toHaveProperty("message", "User not found")
    })
});