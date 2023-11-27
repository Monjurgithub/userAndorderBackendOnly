import { Schema, model} from 'mongoose';
import { TIUser, UserModels, userMethods } from './User/user.interface';
import bcrypt from 'bcrypt';
import config from '../config';



const userSchema = new Schema<TIUser, UserModels, userMethods>({
    userId: { type: 'Number' },
    username: { type: 'String' },
    password: { type: 'String' },
    fullName: {

        firstName: { type: 'String' },
        lastName: { type: 'String' },

    },
    age: { type: 'Number' },
    email: { type: 'String' },
    isActive: { type: 'Boolean' },
    hobbies:  [{ type: String }],
    address: {
        street: { type: 'String' },
        city: { type: 'String' },
        country: { type: 'String' },

    },

})


userSchema.pre("save", async function(next)
{
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this
    user.password =  await bcrypt.hash(user.password, Number(config.bcrypt_salt_round))
    next()

})



userSchema.methods.isUserExits = async function(userId: number) {
    const existingUser = UserModel.findOne({userId})
    return existingUser
}

export const UserModel = model<TIUser, UserModels>('User', userSchema)