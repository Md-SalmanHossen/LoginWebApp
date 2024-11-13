
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

app.listen(3000,()=>{
   console.log("Server is running on 3000")
});

