import mongoose from "mongoose";

const propiedadSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    habitaciones: {
        type: Number,
        required: true
    },
    estacionamiento: {
        type: Number,
        required: true
    },
    wc: {
        type: Number,
        required: true
    },
    calle: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    lng: {
        type: String,
        required: true
    },
    imagen: {
        type: Buffer,
        required: true
    },
    publicado: {
        type: Boolean,
        required: true,
        default: false
    }
});

const propiedades = mongoose.model("propiedades", propiedadSchema);
export default propiedades;