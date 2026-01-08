import { IUser } from "../interfaces/user.interface";
import * as userRepository from "../repositories/user.repository";

export const createUser = async (userData : IUser): Promise<IUser> => {
    // check whether user exists
    const existingUser = await userRepository.findByEmail(userData.email);

    if(existingUser){
        throw new Error("User already exists !");
    }

    // create user
    return userRepository.createUser(userData);
}