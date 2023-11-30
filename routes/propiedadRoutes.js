import express from "express";
import { getPropertyById, addProperty } from "../controllers/propiedadController.js";

const router = express.Router();

router.get('/:id', getPropertyById);
router.post('/', addProperty);

export default router;