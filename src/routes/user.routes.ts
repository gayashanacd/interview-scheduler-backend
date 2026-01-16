import { Router } from "express";
import { createUserController, getAllUsersController, getUserByIdController } from "../controllers/user.controller";
import { createUserValidator } from "../validators/user.validator";
import { validateRequest } from "../middlewares/validate.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";


const router = Router();

router.get("/",authMiddleware, getAllUsersController);

router.get("/:id", authMiddleware, getUserByIdController)

router.post(
    "/", 
    createUserValidator,
    validateRequest,
    createUserController
);

export default router;