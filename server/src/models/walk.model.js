import mongoose from "mongoose";


const walkSchema = new mongoose.Schema({
    dateWalk: { type: Date, required: true },
    startTimeWalk: { type: String, required: true },
    timeWalk: { type: Number, required: true },
    newsWalk: { type: String },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet",
        required: true
    },
    walker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
})

export default mongoose.model("Walk", walkSchema)