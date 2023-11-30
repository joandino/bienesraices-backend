import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { generarId } from "../helpers/tokens.js";

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        default: generarId(),
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

usuarioSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

usuarioSchema.methods.validatePassword = async function (formPassword) {
    return await bcrypt.compare(formPassword, this.password);
};

const usuarios = mongoose.model("usuarios", usuarioSchema);
export default usuarios;