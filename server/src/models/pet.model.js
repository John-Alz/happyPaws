import mongoose from "mongoose";


const petSchema = new mongoose.Schema({
    petName: { type: String, required: true },
    petAge: { type: Number, required: true },
    petBreed: { type: String, required: true },
    petGender: { type: String, required: true },
    petRecomendations: { type: String, required: true },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
})

export default mongoose.model("Pet", petSchema);