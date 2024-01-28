import mongoose from 'mongoose'

const formSchema= new mongoose.Schema({
    github:{
        type:String,
    },
    linkedIn:{
        type:String,
    },
    education:[{
        type:String,
    }],
    projects:[{
        type:String,
    }],
    interests:[{
        type:String,
    }],
    technology:[{
        type:String,
    }]

},{timestamps:true})

export const user = mongoose.model("user",formSchema)