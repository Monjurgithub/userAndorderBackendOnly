/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { userServices } from "./user.service";
import JoiValidationSchema from "./user.validation";


const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body.user;
        const { error} = JoiValidationSchema.validate(user)
        const result = await userServices.createUserIntoDB(user)
        if (error) {
            res.status(500).json(
                {
                    success: false,
                    message: 'Wrong Input',
                    error: error.details
                }
            )

        }
        

        res.status(201).json({
            success: true,
            message: "User created successfully!",
            data: result
        })

    } catch (error: any) {
        res.status(500).json(
            {
                success: false,
                message: error.message || 'Wrong Input',
                error: error.details
            }
        )
    }
}

const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getAllUserFromDB()
        res.status(200).json({
            success: true,
            message: "All User retrive successfully!",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const result = await userServices.getSingleUserFromDB(userId);
        res.status(200).json({
            success: true,
            message: "get Single user successfully!",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const updatefromControlar = async (req: Request, res: Response) => {
    try {

        const userData = req.body;
        const { userId } = req.params;
        const result = await userServices.UpdateUser(userId, userData);
        res.status(200).json({
            success: true,
            message: "update user successfully!",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteUserControlar = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const result = await userServices.deleteUser(userId);
        if (result === null) {
            return res.status(404).json({
                success: false,
                message: "User not found or already deleted!",
                data: null
            });
        }

        res.status(200).json({
            success: true,
            message: "Deleted user successfully!",
            data: null
        });
    } catch (error) {
        console.log(error);
    }
}

export const userControlar =
{
    createUser,
    getAllUser,
    getSingleUser,
    updatefromControlar,
    deleteUserControlar
}