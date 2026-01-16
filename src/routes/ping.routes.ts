import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get(
    "/",
    authMiddleware,
    (req, res) => {
        res.json({
            success : true,
            message : "Pong!"
        });
    }
);

export default router;