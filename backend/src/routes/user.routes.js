import Router from "express"
import {login,registration} from "../controllers/user.controller.js"

const router=Router();

router.route("/registration").post(registration)
router.route("/login").post(login)

export default router