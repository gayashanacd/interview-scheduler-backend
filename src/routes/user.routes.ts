import { Router } from "express";

const router = Router();

router.get("/", (req, res)=>{
    res.json({ message : "User route placeholder"});
});

router.post("/", (req, res)=> {
    res.status(201).json({
        message : "Create user endpoint placeholder"
    });
});

export default router;