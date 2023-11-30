import bcrypt from 'bcrypt';
import Usuario from '../models/Usuario.js';
import { generarJWT, generarId } from '../helpers/tokens.js';
import { emailRegistro, emailOlvidePassword } from '../helpers/emails.js';

const registrar = async (req, res) => {
    try {
        // Extraer los datos
        const { nombre, email, password } = req.body;

        if(!nombre || !email || !password) {
            return res.status(404).json({ msg: "Todos los campos son obligatorios" });
        }

        // Verificar que el usuario no este duplicado
        const existeUsuario = await  Usuario.findOne({ email: req.body.email });

        if(existeUsuario) {
            return res.status(404).json({ msg: "Ya existe una cuenta con este email" });
        }


        // Almacenar un usuario
        const usuario = new Usuario(req.body);
        await usuario.save();

        // Envia email de confirmación
        emailRegistro({
            nombre: usuario.nombre,
            email: usuario.email,
            token: usuario.token
        });

        res.json({msg : 'Cuenta creada correctamente'});
    } catch (err) {
        console.log(err);
    }
}

export {
    registrar
}