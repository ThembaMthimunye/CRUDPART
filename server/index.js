import express from "express";
import dotenv from "dotenv"
import mongoose, { Mongoose } from "mongoose";
import userRouters from "./routes/user.js"
import authRouters from "./routes/auth.js"
import cookieParser from "cookie-parser";

const app=express();
dotenv.config();


const connect=()=>{
    mongoose.connect(process.env.MONGO)
    .then(()=>{console.log('connected to mongodb database')

    })
    .catch (err=>{
        throw err;
    });
};
app.use(cookieParser);
app.use(express.json());
app.use("/api/users",userRouters);
app.use ("/api/auth",authRouters);



app.listen(8000, () => {
    connect();
  console.log(`Server is running on http://localhost:8000`);
});

