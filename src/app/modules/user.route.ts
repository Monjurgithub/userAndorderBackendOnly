import express  from "express";
import { userControlar } from "./User/user.controlar";
const router = express.Router() 


router.post('/users', userControlar.createUser)
router.get('/users', userControlar.getAllUser)
router.get('/users/:userId', userControlar.getSingleUser)
router.patch('/users/:userId', userControlar.updatefromControlar)
router.delete('/users/:userId', userControlar.deleteUserControlar)

export const userRoute = router;