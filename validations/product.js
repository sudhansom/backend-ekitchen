import { check } from "express-validator";

export const productValidator = [
    check("name")
        .trim()
        .notEmpty()
        .withMessage("Name is missing")
        .isLength({min: 3})
        .withMessage("length of name should be at least 3 characters")
        .isLength({max: 30})
        .withMessage("length of name should be at most 30 characters"),
    check("image")
        .trim()
        .notEmpty()
        .withMessage("Image is missing"),
    check("quantity")
        .notEmpty()
        .withMessage("Quantity is missing"),
    check("category")
        .trim()
        .notEmpty()
        .withMessage("category is missing")
        .isLength({min: 3})
        .withMessage("length of category should be at least 3 characters")
        .isLength({max: 30})
        .withMessage("length of category should be at most 30 characters"),
]