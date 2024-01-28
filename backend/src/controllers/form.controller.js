import {asyncHandler} from '../utils/asyncHandler.js'
import {apiError} from "../utils/apiError.js"
import {apiResponse} from "../utils/apiResponse.js"
import {user} from "../models/user.model.js"

const form_submit=asyncHandler(async(req,res)=>{
   const {github,projects,education,linkedIn,interests,technology}=req.body;
   try{
        const newUser=await user.create({
             github:github||"",
             projects:projects||"",
             education:education||"",
             linkedIn:linkedIn||"",
             interests:interests||"",
             technology:technology||""
         })
    }catch(error){
        throw new apiError(400,"Form not submitted")
    }

    res.status(200).json(
        new apiResponse(200,newUser,"Form Submitted")
    )
})

export {
    form_submit
}