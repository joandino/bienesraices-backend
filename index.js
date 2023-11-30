import express from 'express';
import dotenv from "dotenv";
import connectDB from './config/db.js';
import cors from 'cors';

import usuarioRoutes from './routes/usuarioRoutes.js';
import propiedadRoutes from './routes/propiedadRoutes.js';

//Create server
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

dotenv.config();

connectDB();

// Enable Cors
app.use(cors());

// Routing
app.use('/api/auth', usuarioRoutes);
app.use('/api/propiedad', propiedadRoutes);

// App port
const port = process.env.PORT || 4000;

// Start app
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});