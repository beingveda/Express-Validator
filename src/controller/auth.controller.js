import userModel from "../models/user.model.js";


export async function register(req,res){

    const {email, phone, password} = req.body

     
     const errors = []

     if(!email){
        error.push({
            field: "email",
            message:"Email is required"
        })
     }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email && !emailRegex.test(email)){
        errors.push({
            field: "email",
            message: "Invalid Email Address"
        })
    }

    if(!phone){
        error.push({
            field:"phone",
            message:"Phone number is required"
        })
    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if(phone && !phoneRegex.test(phone)){
        errors.push({
            field:"phone",
            message:"Invalid phone number"
        })
    }

    if( !password && !(password.trim())){
        errors.push({
            field:"password",
            message:"Password is required"
        })
    }

    if((password.trim()).length<6){
        errors.push({
            field:"password",
            message:"Password field must have minimum 6 characters"
        })
    }

    if (errors.length > 0){
        return res.status(400).json({
            message:"Invalid Request",
            errors
        })
    }

    const user = await userModel.create({
        email,
        phone,
        password: password
    })

    res.status(201).json({
        message:"User registered successfully",
        data:{
            email,
            phone,
            id: user._id
        }
    })

    
}