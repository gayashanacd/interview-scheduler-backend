import { UserModel } from "../models/user.model";
import { IUser } from "../interfaces/user.interface";

export const findByEmail = async (email: string): Promise<IUser | null> => {
    return UserModel.findOne({ email }).lean();
} 

export const createUser = async (userData : IUser): Promise<IUser> =>{
    const user = new UserModel(userData);
    return user.save();
}