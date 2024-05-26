const express = require('express');
const path = require('path');
const cors = require('cors');
const etlHandler = require('./api/etl');

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

// Servir archivos estáticos del directorio 'public'
const publicDir = path.join(process.cwd(), 'public');
app.use('/public', express.static(publicDir));

// Configurar el puerto y escuchar
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
