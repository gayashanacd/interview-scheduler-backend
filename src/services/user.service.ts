import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "../interfaces/user.interface";
import { findByEmail, createUser, findAllUsers, findUserById} from "../repositories/user.repository";

export const createUserService = async (userData : IUser): Promise<IUser> => {
    // check whether user exists
    const existingUser = await findByEmail(userData.email);

    if(existingUser){
        const error:any = new Error("User already exist");
        error.statusCode = 409;
        throw error;
    }

    // hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    // create user
    const user = await createUser(userData);
    return user;
}

export const getAllUsersService = async (): Promise<IUser[] | []> => {
    return await findAllUsers();   
}

export const getUserByIdService = async (id : string): Promise<IUser> => {
    // Validate mongo ObjectId
    if(!mongoose.Types.ObjectId.isValid(id)){
        const error: any = new Error("Invalid user id");
        error.statusCode = 400;
        throw error;
    }

    const user: IUser = await findUserById(id);

    if(!user){
        const error: any = new Error("User not found");
        error.statusCode = 404;
        throw error;    
    }

    return user;
}