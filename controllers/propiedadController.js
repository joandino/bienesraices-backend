import Propiedad from '../models/Propiedad.js';
import { writeFileSync } from 'fs';

const getPropertyById = async (req, res) => {
    try {
        const { id } = req.params;

        const propiedad = await Propiedad.findById(id);

        writeFileSync('./propiedad.jpg', propiedad.imagen);
    } catch (err) {
        console.log(err);
    }
}

const addProperty = async (req, res) => {
    try {
        const { titulo, descripcion, habitaciones, estacionamiento, wc, calle, lat, lng, imagen } = req.body;

        var bindata = Buffer.from(imagen.split(",")[1], "base64");

        const propiedad = new Propiedad({
            titulo,
            descripcion,
            habitaciones,
            estacionamiento,
            wc,
            calle,
            lat,
            lng,
            imagen: bindata
        });

        await propiedad.save();
    } catch (err) {
        console.log(err);
    }
}

export {
    getPropertyById,
    addProperty
}