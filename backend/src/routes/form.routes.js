import {Router} from 'express'
import {formController} from "../controllers/form.conttroller.js"
import {upload} from "../middleware/multer.middleware"

Router.route("/submit").post(
    upload.fields([
        {
            name:"file",
            maxCount:1
        }
    ])
,formController)

export default Router;