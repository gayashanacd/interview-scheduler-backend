import { Request, Response, NextFunction } from "express";
import { createUserService, getAllUsersService, getUserByIdService } from "../services/user.service";
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

export const getAllUsersController = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
    try {
        const users = await getAllUsersService();

        return successResponse(
            res,
            "Users fetched successfully",
            users,
            200
        );
    } catch (error : any) {
        next(error);   
    }
}

export const getUserByIdController = async(
    req : Request,
    res : Response,
    next : NextFunction
) => {
    try {
        const user = await getUserByIdService(req.params.id);

        return successResponse(
            res,
            "User fetched successfully",
            user,
            200
        );
    } catch (error : any) {
        next(error);       
    }
}
