import { Schema } from "mongoose";
import { TOrder } from "./order.interface";
const orderSchema = new Schema<TOrder>(
    {
        productName: { type: 'String' },
        price: { type: 'Number' },
        quantity: { type: 'Number' }
        
    }
)