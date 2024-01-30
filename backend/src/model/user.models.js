import mongoose from "mongoose"

const user_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

//bycrypt

export const users=mongoose.model("users",user_schema)