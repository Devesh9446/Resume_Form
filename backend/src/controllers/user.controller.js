import { asyncHandler } from "../utils/asyncHandler";
import {users} from "../model/user.model.js";
import apiError from "../utils/apiError.js"
import apiResponse from "../utils/apiResponse.js"

const registration=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body
    const find_user=users.findOne({
        $or:[{email}]
    })
    if(find_user)
    {
        throw new apiError(400,"user already created")
    }
    if(username && email && password)
    {
        throw new apiError(400,"All fields required")
    }
    const new_user=await users.createUser({
        username,
        email,
        password
    })
    res.statusCode(200).json(new apiResponse(200,new_user,"user created successfully"))
})

const login=asyncHandler(async(req,res)=>{

})


export default {registration,login}