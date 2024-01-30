import mongoose from 'mongoose'

const formSchema= new mongoose.Schema({
    Name:{
            type:String,
    },
    Email:{
            type:String,
    },
    Phone:{
            type:String,
    },
    Education:{
            type:[""],
    },
    WorkExperinence:{
            type:[""],
    },
    PersonalProjects:{
        type:[""],        
    },
    Skills:{
        type:[""],        
    },
    GitHub:{
        type:String,        
    },
    LinkedIn:{
        type:String,        
    },
    Achievements:{
        type:[""],        
    }
},{timestamps:true})

export const user = mongoose.model("user",formSchema)