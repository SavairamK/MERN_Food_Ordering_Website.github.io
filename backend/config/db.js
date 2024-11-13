import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://kshitijas:onlinefoodorder@cluster0.i2ticcd.mongodb.net/food-delivery')
    .then(() => console.log('Database is connected successfully.'))
}
