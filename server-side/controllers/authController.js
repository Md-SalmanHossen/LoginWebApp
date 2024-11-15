
import { errorHandler } from '../utils/error.js';
import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'

export const signup=async (req,res,next)=>{
   try {

      const {userName,email,password}=req.body;
      const hashedPassword=bcryptjs.hashSync(password,10)
      const newUser=new User({userName,email,password:hashedPassword});
      console.log(newUser);
      await newUser.save();
      res.status(201).json({message:"User created successfully"})

   } catch (error) {

      if (error.code === 11000) {
         res.status(409).json({ message: "User already exists" });
      }else{
         next(errorHandler(300,"something went wrong"));
      }
      //next(errorHandler(300,"something went wrong")); 

   }
}