import { UserModel } from "../user.model";
import { TIUser } from "./user.interface";

const createUserIntoDB = async (userData: TIUser) => {
    // const result = await UserModel.create(user)
    const user = new UserModel(userData)
    if(await user.isUserExits(userData.userId))
    {
        throw new Error ("User Alredy exists")
    }
    const result = await user.save()


    return result
}
const getAllUserFromDB = async () => {
    const result = await UserModel.find({},{
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
        _id: 0
    })
    return result
}

const getSingleUserFromDB = async (userId: string) => {
    const result = await UserModel.findOne({ userId }).select('-password')
    return result

}
const UpdateUser = async (userId: string, userData: TIUser) => {
    const result = await UserModel.findOneAndUpdate({ userId }, userData,
        {
            new: true,
            runValidators: true
        })
    return result

}
const deleteUser = async (userId: string) => {
    const result = await UserModel.findOneAndDelete({ userId })
    return result

}

export const userServices = {
    createUserIntoDB,
    getAllUserFromDB,
    getSingleUserFromDB,
    UpdateUser,
    deleteUser
}