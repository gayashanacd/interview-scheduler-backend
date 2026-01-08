import { Router } from "express";
import { createUser } from "../controllers/user.controller";

const router = Router();

router.get("/", (req, res)=>{
    res.json({ message : "User route placeholder"});
});

router.post("/", createUser);

export default router;