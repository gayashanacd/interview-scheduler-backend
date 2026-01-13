import { Router } from "express";
import { createUserController, getAllUsersController, getUserByIdController } from "../controllers/user.controller";
import { createUserValidator } from "../validators/user.validator";
import { validateRequest } from "../middlewares/validate.middleware";

const router = Router();

router.get("/", getAllUsersController);

router.get("/:id", getUserByIdController)

router.post(
    "/", 
    createUserValidator,
    validateRequest,
    createUserController
);

export default router;