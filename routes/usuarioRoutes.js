import express from "express";
import { registrar } from "../controllers/usuarioController.js";

const router = express.Router();

router.post('/registro', registrar);

export default router;