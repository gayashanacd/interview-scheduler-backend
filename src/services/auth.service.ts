import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";
import { ApiError } from "../utils/ApiError";


export const loginService = async (
    email : string,
    password : string
) => {
    // Find user with password
    const user = await UserModel.findOne({ email }).select("+password");

    if(!user){
        throw new ApiError(401, "Invalid email or password");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        throw new ApiError(401, "Invalid email or password");
    }

    // Generate JWT
    const token = jwt.sign(
        { userId : user._id },
        process.env.JWT_SECRET!,
        { expiresIn : "1hr"}
    );

    // Return response
    return {
        token,
        user: {
            id: user._id,
            email: user.email,
            name: user.name 
        },
    }
}