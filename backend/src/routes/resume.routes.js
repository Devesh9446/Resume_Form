import {Router} from 'express'
import {upload} from "../middleware/multer.middleware.js"

const router=Router()

router.route("/upload").post(
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
})

export default router;