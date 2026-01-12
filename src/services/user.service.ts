import { IUser } from "../interfaces/user.interface";
import { findByEmail, createUser} from "../repositories/user.repository";

export const createUserService = async (userData : IUser): Promise<IUser> => {
    // check whether user exists
    const existingUser = await findByEmail(userData.email);

    if(existingUser){
        const error:any = new Error("User already exist");
        error.statusCode = 409;
        throw error;
    }

    // create user
    const user = await createUser(userData);
    return user;
}