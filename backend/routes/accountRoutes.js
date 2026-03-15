import express from "express"
import{
    getBalance,
    getStatement,
    transfer,
    getUsers,
} from "../controllers/accountController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"
const router = express.Router()
router.get("/balance",authMiddleware,getBalance)
router.get("/balance",authMiddleware,getStatement)
router.get("/balance",authMiddleware,transfer)
router.get("/balance",authMiddleware,getUsers)
export default router 