import express from 'express';
import path from 'path';
import cors from 'cors';
import etlHandler from './api/etl'; // Asegúrate de que la ruta es correcta

const app = express();

// Configurar CORS
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Definir la ruta para el manejador de ETL
app.get('/api/etl', etlHandler);

// Servir archivos estáticos del frontend
const frontendBuildPath = path.join(__dirname, '..', 'frontend', '.next');
app.use(express.static(frontendBuildPath));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(frontendBuildPath, 'index.html'));
});

// Configurar el puerto y escuchar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
