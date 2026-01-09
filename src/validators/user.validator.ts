import { body } from "express-validator";

export const createUserValidator = [
    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format"),
    
    body("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({min : 2})
        .withMessage("Name must be at least 2 characters")
];