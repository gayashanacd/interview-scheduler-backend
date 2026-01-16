import { Router } from "express";
import { loginController } from "../controllers/auth.controller";
import { validateRequest } from "../middlewares/validate.middleware";
import { loginValidaor } from "../validators/auth.validator";

const router = Router();

router.post(
    "/login",
    loginValidaor,
    validateRequest,
    loginController
);

export default router;