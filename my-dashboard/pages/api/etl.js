import { Storage } from '@google-cloud/storage';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';
import config from '../../config';

export default async function handler(req, res) {
  console.log('Starting ETL and data compilation process');

  const credentialsPath = path.join(process.cwd(), config.GOOGLE_APPLICATION_CREDENTIALS);
  if (!fs.existsSync(credentialsPath)) {
    console.error(`Credentials file not found at ${credentialsPath}`);
    return res.status(500).json({ error: `Credentials file not found at ${credentialsPath}` });
  }

  const storage = new Storage({
    keyFilename: credentialsPath,
  });

  const bucket = storage.bucket(config.BUCKET_NAME);

  const products = [];
  const ordersByYear = {};

  try {
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
          try {
            const parsedData = parse(data.toString(), {
              columns: true,
              skip_empty_lines: true,
              delimiter: ';',
            });

            ordersByYear[year].push(...parsedData.map((record, index) => {
              return {
                order_id: record.order_id || `missing_order_id_${index + 1}`,
                customer_id: record.customer_id || `missing_customer_id_${index + 1}`,
                quantity: record.quantity ? parseInt(record.quantity.replace(',', '.'), 10) : 1,
                price_MRP: record.price_MRP ? parseFloat(record.price_MRP.replace(',', '.')) : 0,
                payment: record.payment ? parseFloat(record.payment.replace(',', '.')) : 0,
                timestamp: record.timestamp || '1970-01-01 00:00:00',
                rating: record.rating ? parseInt(record.rating, 10) : 0,
                product_category: record.product_category || 'unknown',
                product_id: record.product_id || 'NULL',
                payment_type: record.payment_type || 'unknown',
                order_status: record.order_status || 'unknown',
                product_weight_g: record.product_weight_g ? parseFloat(record.product_weight_g.replace(',', '.')) : 0,
                product_length_cm: record.product_length_cm ? parseFloat(record.product_length_cm.replace(',', '.')) : 0,
                product_height_cm: record.product_height_cm ? parseFloat(record.product_height_cm.replace(',', '.')) : 0,
                product_width_cm: record.product_width_cm ? parseFloat(record.product_width_cm.replace(',', '.')) : 0,
                customer_city: record.customer_city || 'unknown',
                customer_state: record.customer_state || 'unknown',
                seller_id: record.seller_id || `missing_seller_id_${index + 1}`,
                seller_city: record.seller_city || 'unknown',
                seller_state: record.seller_state || 'unknown',
                payment_installments: record.payment_installments ? parseInt(record.payment_installments, 10) : 1,
              };
            }));
          } catch (parseError) {
            console.error(`Error parsing file ${file.name}:`, parseError);
            return res.status(500).json({ error: `Error parsing file ${file.name}: ${parseError.message}` });
          }
        }
      }
    }

    console.log('Data parsed successfully');

    // Concatenate all orders from different years into a single array
    const allOrders = Object.values(ordersByYear).flat();

    // Remove duplicate products
    const productSet = new Set();
    const cleanProducts = products.filter(product => {
      if (productSet.has(product.objectID)) {
        return false; // Skip duplicate
      } else {
        productSet.add(product.objectID);
        return true; // Keep unique
      }
    }).map(product => ({
      objectID: product.objectID || 'Unknown',
      name: product.name || 'Unknown',
      description: product.description || 'No description available',
      brand: product.brand || 'Unknown brand',
      categories: product.categories || [],
      hierarchicalCategories: {
        lvl0: product.hierarchicalCategories?.lvl0 || 'Unknown',
        lvl1: product.hierarchicalCategories?.lvl1 || 'Unknown',
        lvl2: product.hierarchicalCategories?.lvl2 || 'Unknown',
        lvl3: product.hierarchicalCategories?.lvl3 || 'Unknown',
      },
      type: product.type || 'Unknown type',
      price: product.price || 0,
      price_range: product.price_range || 'Unknown',
      image: product.image || 'No image available',
      url: product.url || 'No URL available',
      free_shipping: product.free_shipping !== undefined ? product.free_shipping : false,
      popularity: product.popularity || 0,
      rating: product.rating || 0,
    }));

    // Remove duplicate orders
    const orderSet = new Set();
    const cleanOrders = allOrders.filter(order => {
      if (orderSet.has(order.order_id)) {
        return false; // Skip duplicate
      } else {
        orderSet.add(order.order_id);
        return true; // Keep unique
      }
    }).map(order => ({
      ...order,
      quantity: order.quantity || 1,
      price_MRP: order.price_MRP || 0,
      payment: order.payment || 0,
      rating: order.rating || 0,
    }));

    console.log('Writing cleaned data to files');
    fs.writeFileSync(path.join(process.cwd(), 'public', 'products.json'), JSON.stringify(cleanProducts));
    fs.writeFileSync(path.join(process.cwd(), 'public', 'orders.json'), JSON.stringify(cleanOrders));

    console.log('Files written successfully');

    // Log a summary of orders grouped by year
    for (const year of Object.keys(ordersByYear)) {
      console.log(`File orders/${year}/* downloaded`);
    }

    res.status(200).json({ message: 'ETL and data compilation process completed successfully' });
  } catch (error) {
    console.error('Error during ETL and data compilation process:', error);
    res.status(500).json({ error: error.message });
  }
}
