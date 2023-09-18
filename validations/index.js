import { validationResult } from "express-validator";
import { HttpErrors } from "../http-errors/errors.js";

export const runValidation = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        let errorsList = errors.array().map((error) => error.msg);
        //return res.status(400).json({errors: errorsList});
       // const errors = new HttpErrors(toString(errorsList), 500)
       //return next({errors: errorsList});
        return next(String(errorsList));
       // throw new Error(toString(errorsList))
    }
    next();
};