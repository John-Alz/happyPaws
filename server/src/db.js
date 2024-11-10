import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/happypaws')
        console.log('DB esta conectado');
    } catch (error) {
        console.error(`ERROR: ${error}`)
    }
}