import {Router} from 'express'
import {upload} from "../middleware/multer.middleware.js"

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

export default router;