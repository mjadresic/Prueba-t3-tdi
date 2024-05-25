import { Storage } from '@google-cloud/storage';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';
import config from '../../config';

export default async function handler(req, res) {
  try {
    console.log('Starting ETL and data compilation process');

    const storage = new Storage({
      keyFilename: path.join(process.cwd(), config.GOOGLE_APPLICATION_CREDENTIALS),
    });

    const bucket = storage.bucket(config.BUCKET_NAME);

    const products = [];
    const ordersByYear = {};

    console.log('Attempting to retrieve files from bucket');
    const [files] = await bucket.getFiles();
    console.log('Files retrieved from bucket:', files.map(file => file.name));
    console.log("Downloading...");

    for (const file of files) {
      const [data] = await file.download();
      if (file.name.includes('products')) {
        const productData = JSON.parse(data.toString());
        products.push(...productData);
        console.log(`File ${file.name} downloaded`);
      } else if (file.name.includes('orders')) {
        const yearMatch = file.name.match(/orders\/(\d{4})\//);
        if (yearMatch) {
          const year = yearMatch[1];
          if (!ordersByYear[year]) {
            ordersByYear[year] = [];
          }
          const parsedData = parse(data.toString(), {
            columns: true,
            skip_empty_lines: true,
            delimiter: ';',
          });
          ordersByYear[year].push(...parsedData);
        }
      }
    }

    console.log('Data parsed successfully');

    const allOrders = Object.values(ordersByYear).flat();

    const productSet = new Set();
    const cleanProducts = products.filter(product => {
      if (productSet.has(product.objectID)) {
        return false;
      } else {
        productSet.add(product.objectID);
        return true;
      }
    });

    const orderSet = new Set();
    const cleanOrders = allOrders.filter(order => {
      if (orderSet.has(order.order_id)) {
        return false;
      } else {
        orderSet.add(order.order_id);
        return true;
      }
    });

    console.log('Writing cleaned data to files');
    fs.writeFileSync(path.join(process.cwd(), 'public', 'products.json'), JSON.stringify(cleanProducts, null, 2));
    fs.writeFileSync(path.join(process.cwd(), 'public', 'orders.json'), JSON.stringify(cleanOrders, null, 2));
    console.log('Files written successfully');

    res.status(200).json({ message: 'ETL and data compilation process completed successfully' });
  } catch (error) {
    console.error('Error during ETL and data compilation process:', error);
    res.status(500).json({ error: error.message });
  }
}
