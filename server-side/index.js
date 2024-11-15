
import userRoutes from './routes/userRoute.js';
import authRoutes from './routes/authRoute.js';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
   console.log('Connect MongoDB');
}).catch((err)=>{
   console.log(err);
});


const app=express();
app.use(express.json());
app.use(cors());



app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next)=>{
   const statusCode=err.statusCode||500;//internal server error code=500
   const message=err.message||"Internal Server Error";
   return res.status(statusCode).json({
      success:false,
      message,
      statusCode,
   })
})

app.listen(3000,()=>{
   console.log("Server is running on 3000")
});

