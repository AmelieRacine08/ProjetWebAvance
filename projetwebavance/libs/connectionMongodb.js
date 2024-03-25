import mongoose from "mongoose";

export const connectToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to MongoDB")
    }catch(error){
        console.error("Error connecting to MongoDB", error)
    }
}