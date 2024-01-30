import {Router} from 'express'
import {upload} from "../middleware/multer.middleware.js"
// import {user} from "../model/form.model.js"

const router=Router()

router.route("/submit").post(
    upload.fields([
        {
            name:"file",
            maxCount:1
        }
    ])
,(_, res) => {
    res.send('File uploaded successfully!');
})

router.route("/form").get((req,res)=>{
    console.log("req.body :",req.body)
    console.log("req.params :",req.params)
    console.log("req.querry :",req.querry)
})

export default router;