import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const UserSchema = new Schema<IUser>(
    {
        email : {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        name : {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

export const UserModel = mongoose.model<IUser>("User", UserSchema); 