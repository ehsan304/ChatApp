import express from "express"
import protectedRoute from "../middleware/protectRoute.js"
import {getUserForSideBar} from "../controllers/user.controller.js"


const router = express.Router()


router.get("/", protectedRoute, getUserForSideBar)




export default router