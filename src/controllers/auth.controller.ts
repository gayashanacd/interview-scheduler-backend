import { Request, Response, NextFunction } from "express";
import { loginService } from "../services/auth.service";
import { successResponse } from "../utils/response";

export const loginController = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
    try {
        const { email, password } = req.body;
        const result = await loginService(email, password);

        return successResponse(
            res,
            "Login successfully",
            result,
            200
        );

    } catch (error: any) {
        next(error);
    }
}