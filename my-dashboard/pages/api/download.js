import { Storage } from '@google-cloud/storage';
import fs from 'fs';
import path from 'path';
import config from '../../config';

export default async function handler(req, res) {
  const storage = new Storage({
    keyFilename: config.GOOGLE_APPLICATION_CREDENTIALS,
  });

  const bucket = storage.bucket(config.BUCKET_NAME);
  const localDataPath = path.join(process.cwd(), 'local-data');
  const publicDataPath = path.join(process.cwd(), 'public', 'local-data');

  // Crear la carpeta local-data si no existe
  if (!fs.existsSync(localDataPath)) {
    fs.mkdirSync(localDataPath);
  }

  // Crear la carpeta public/local-data si no existe
  if (!fs.existsSync(publicDataPath)) {
    fs.mkdirSync(publicDataPath, { recursive: true });
  }

  try {
    const [files] = await bucket.getFiles();
    console.log('Files retrieved from bucket:', files.map(file => file.name));

    for (const file of files) {
      const [data] = await file.download();
      console.log(`File ${file.name} downloaded`);

      const localFilePath = path.join(localDataPath, file.name);
      const localFileDir = path.dirname(localFilePath);

      // Guardar el archivo localmente
      if (!fs.existsSync(localFileDir)) {
        fs.mkdirSync(localFileDir, { recursive: true });
      }
      fs.writeFileSync(localFilePath, data.toString());

      // Copiar el archivo a la carpeta public/local-data
      const publicFilePath = path.join(publicDataPath, file.name);
      const publicFileDir = path.dirname(publicFilePath);

      if (!fs.existsSync(publicFileDir)) {
        fs.mkdirSync(publicFileDir, { recursive: true });
      }
      fs.writeFileSync(publicFilePath, data.toString());
    }

    res.status(200).json({ message: 'Files downloaded and copied to public/local-data successfully' });
  } catch (error) {
    console.error('Error downloading files:', error);
    res.status(500).json({ error: error.message });
  }
}
