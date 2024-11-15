import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Paseador', 'Duenio', 'Administrador'], required: true },

    // Subdocumento para los Paseadores
    paseadorInfo: {
        description: String,
        experience: Number,
        idType: String,
        idNumber: String,
        contactPhone: String,
        companyPhone: String,
        companyAddress: String,
        hourlyRate: Number,
        rating: { type: Number },
    },

    // Subdocumento para los Dueños
    duenioInfo: {
        contactPhone: String,
        adressOwner: String,
    },

    // Subdocumento para los Administradores
    adminInfo: {
        idType: String,
        idNumber: String,
        contactPhone: String,
    },
}, { timestamps: true })



export default mongoose.model('User', userSchema)