import { body } from "express-validator";

export const loginValidaor = [
    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email"),
    
    body("password")
        .notEmpty()
        .withMessage("Password is required")
];