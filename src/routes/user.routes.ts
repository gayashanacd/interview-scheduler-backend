import { Router } from "express";

const router = Router();

router.get("/", (req, res)=>{
    res.json({ message : "User route placeholder"});
});

export default router;