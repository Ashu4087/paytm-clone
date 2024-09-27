import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userShema = new Schema({
    username :{
        type:String,
        required:true,
        unique:true,
    },
    firstname :{
        type:String,
        required:true,
    },
    lastname :{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
});

export default mongoose.model('User', userShema);