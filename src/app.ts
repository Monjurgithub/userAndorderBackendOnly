import express, { Request, Response } from "express"
import cors from "cors"
import { userRoute } from "./app/modules/user.route"
const app = express()
app.use(express.json())
app.use(cors())



app.use('/api', userRoute)

app.get('/', (req: Request, res: Response) => {
    
    res.status(200).json(
        {
            status: "success",
            message: 'welcome to our API'
          
        }
    )
})

export default app
