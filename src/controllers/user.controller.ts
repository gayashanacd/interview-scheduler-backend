import { Request, Response, NextFunction } from "express";
import { createUserService } from "../services/user.service";
import { successResponse } from "../utils/response";

export const createUserController = async (
    req: Request, 
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await createUserService(req.body);

        return successResponse(
           res,
           "User created successfully",
           user,
           201
        );
    } catch (error : any) {
        next(error);
    }
}