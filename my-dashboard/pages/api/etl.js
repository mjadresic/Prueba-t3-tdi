import { Storage } from '@google-cloud/storage';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';
import config from '../../config';

const GOOGLE_APPLICATION_CREDENTIALS = {
  type: 'service_account',
  project_id: 'taller-integracion-310700',
  private_key_id: '41f361102b8be3e3df3613da4fef1c47f02f6d90',
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDR16z8s1laceUo\nOWx+hyT5stigMaXXnrue/wzL/+ld1wrds/tpsL0btKHMjwR2GAj0DqzQ/lTTrJgj\n9ItGoAYXjq6acAgOLC1pKwJS9U5MGmNIJfODEwajneEydM+ORymVBW8PMGGuVGSc\nZ1XSNrJ66sMcXikOsVg7BvpGtf9bnGQvPaVN5JIrbv0TW3dQzxLkOesOrgWx5Lle\nGuK5KUbtaWWQasxqICGBiVaWzKSIALlPYwe9RsqKi+Asrp4J8AY8EKsf7SHdj/SO\ngDmvImCJw183PPe8gSTeMWIkWuisbHDL2gK8jE8ZGmco9KtnS2D/W5O8O5UJVCHY\n5Ww9KEQ/AgMBAAECggEAEO1DXH0BI60VTZnYORqgrm2xULbAiHSa8NflCd2iTvoG\nO90FVkC1+HKpLI2K0BXfPwSiBxfE8vA0s43J4FAPPb46MmYAGFiS7y1TeiqkfroQ\nMSUyj+useO1G2aGXjoQKBCXUkBaYgo33MbCaOSNFYWnnhDXKPQ+sLNLCxIpwx0xg\nO/+fDIVCDDiPlNBM1h2Yepdr87bHUVComBhJ/8XYBFRSEM47s6ZUXDnKZG37Vs20\ncW48UkdhkRxJiVWTyjghppkaR6e1j/jpc2m40CqZDN34oFhx6XlNFVb1r/4WFJOg\noXlSBxJFPHZzHKgpXGtqVjBzdYEH5jdD85Cy9E5j8QKBgQD63ESIqME3jH009559\n3EHYdrxksompb2bhojO2oYi+Tn3lWJfsiB1HMybFrLFWS79UrMKFSEQ4/bf/46Nw\nbVxMrGWgvgXkGA6Apsc+kgJFUPLdUvUap1vL1xULpwe83J+4s5xm8wvFxaMh1QBI\n0jWpBgE60xmIPNMaRYfJKb+iDwKBgQDWJEYhQ0exnioV6NlYJ6fbh4YR3dBK60Ex\nyuulovpx/3B1GS4n32UI0OI7xbJtgRb8IIYhPiJqZhH/ooD3bwNBJAfgrQLn4WyP\nnOWwz4c92QEN00eugF+NWCwlukdsq1+0MQln9AFIw4+ynljFDRfo2q+Ri9FtOcqz\nUu2/43mq0QKBgQCcnus2+01u9gqyCCtu3xZJJJCougNSwtfT5aYtzxqF3pGhoDdy\nGOVWr6v0XMZ3X2F8Z0QnXKAjiNzZKXHAXrbys+vbeOhKqW5cikP5X8WFK24GGqYm\n1vhsAsQD+2vMUV5zPchXSkU+XA9mrwq3bG7OMY6RAH1/XqJaU7DcOnGHpwKBgQC0\nylczCfxjZqcdbELi/EfpPZfhSaXrOocGJM2iP+C1kfU9x46CN0azlLcLw7MKZGwl\nXMghFLY1ogscCfRb8iuLOYI1G5xSbK0c6le5WNxTSPxs0a25E8SYLpLHH2fhxSW9\nmZDZZNYYupJ9ONa1NoKzIr4LYUHkt1/82czDrqcvoQKBgQCwFaEc2Sh/tPi7n1Dk\nxAn4jR1+V8QPt/s3qHpSi6yRf5xSYRPfOOFsFhXt7TahE/gee35nPM90hKklrY0q\nvXgjIzRlWwwGudOVU5YBYWb7X2j+8bjOyRHKSDuiGEH3llyI/U+tmKaHfY47RzHY\ndRlJU5BPRU4PlbuMYsLMFfdVUw==\n-----END PRIVATE KEY-----\n',
  client_email: 'acceso-bucket-alumnos-tarea-3@taller-integracion-310700.iam.gserviceaccount.com',
  client_id: '100374981212003440652',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/acceso-bucket-alumnos-tarea-3@taller-integracion-310700.iam.gserviceaccount.com',
};

export default async function handler(req, res) {
  console.log('Starting ETL and data compilation process');

  const storage = new Storage({
    projectId: GOOGLE_APPLICATION_CREDENTIALS.project_id,
    credentials: GOOGLE_APPLICATION_CREDENTIALS,
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