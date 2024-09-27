import mongoose from "mongoose";
import express from "express";
import 'dotenv/config';
import cors from 'cors';
import userRouter from "./routes/user.js";
import accountRouter from "./routes/account.js"


const app = express();

app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/account', accountRouter);

const PORT = process.env.PORT | 4000;


async function serverInit(params) {

    try{
        console.log("Mono", process.env.MONGO_URL);
        
        await mongoose.connect(process.env.MONGO_URL);
        app.listen(PORT, ()=>{
            console.log("Server is Connected to DB & listening on Port ", PORT);
            
        });
    } catch(e) {
        console.log(e);
        
    }
    
}

serverInit();
