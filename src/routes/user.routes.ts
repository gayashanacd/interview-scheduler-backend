import { Router } from "express";
import { createUserController } from "../controllers/user.controller";
import { createUserValidator } from "../validators/user.validator";
import { validateRequest } from "../middlewares/validate.middleware";

const router = Router();

router.get("/", (req, res)=>{
    res.json({ message : "User route placeholder"});
});

router.post(
    "/", 
    createUserValidator,
    validateRequest,
    createUserController
);

export default router;