import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const createUser = async (req: Request, res:Response) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json({
            succes : true,
            data : user
        });
    } catch (error : any) {
        return res.status(400).json({
            succes : false,
            message : error.message || "Failed to create the user"
        });   
    }
}