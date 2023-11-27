import { Model } from "mongoose"

export type TIUser= {
    
        userId: number,
        username: string,
        password: string,
        fullName: {
            firstName: string,
            lastName: string
        },
        age: number,
        email: string,
        isActive: boolean,
        hobbies: [
            string,
            string
        ],
        address: {
            street: string,
            city: string,
            country: string
        }
    
  }

  export type userMethods = {
    // eslint-disable-next-line no-unused-vars
    isUserExits(userId : number) : Promise<TIUser | null>
  }
  export type UserModels =Model<TIUser, Record<string, never>, userMethods>