// server.js

import express from 'express';
import cors from 'cors';
import etlHandler from './etl'; // Ruta al archivo que contiene el manejador de ETL

const app = express();

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Define tu manejador de rutas para la operación de ETL
app.get('/api/etl', etlHandler);

// Escucha en el puerto especificado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
