import {body, validationResult } from "express-validator"

export const registerValidaton =

 [
        body("email")
             .exists().withMessage("Email is Required")
             .isEmail().withMessage("Invalid Email Address"),
        body("phone")
             .exists().withMessage("Phone Number is Required")
             .isMobilePhone("en-IN").withMessage("Invalid Phone Number"),
        body("password")
             .exists().withMessage("Password is required")
             .trim().isLength({min:6}).withMessage("Password must be at least 6 characters long"),

        (req,res) =>{
            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return res.status(400).json({
                    message:"Invalid Request",
                    errors:errors.array()
                })
            }
        }


    ]