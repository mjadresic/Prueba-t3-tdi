import { Storage } from '@google-cloud/storage';
import nextCors from 'nextjs-cors';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

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
  // Habilitar CORS
  await nextCors(req, res, {
    methods: ['GET', 'HEAD'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  console.log('Starting file download process');

  const storage = new Storage({
    projectId: GOOGLE_APPLICATION_CREDENTIALS.project_id,
    credentials: GOOGLE_APPLICATION_CREDENTIALS,
  });

  const bucketName = '2024-1-tarea-3';
  const bucket = storage.bucket(bucketName);

  try {
    console.log('Attempting to retrieve files from bucket');
    const [files] = await bucket.getFiles();
    console.log('Files retrieved from bucket:', files.map(file => file.name));

    let orders = [];
    let products = [];

    for (const file of files) {
      const [data] = await file.download();

      if (file.name.includes('products')) {
        products = JSON.parse(data.toString());
        console.log(`File ${file.name} downloaded`);
      } else if (file.name.includes('orders')) {
        const ordersData = data.toString();
        const parsedData = parse(ordersData, {
          columns: true,
          skip_empty_lines: true,
          delimiter: ';',
        });
        orders.push(...parsedData);
        console.log(`File ${file.name} downloaded`);
      }
    }

    // Write orders and products to JSON files
    fs.writeFileSync(path.join(process.cwd(), 'public', 'products.json'), JSON.stringify(products, null, 2));
    fs.writeFileSync(path.join(process.cwd(), 'public', 'orders.json'), JSON.stringify(orders, null, 2));

    console.log('Files written successfully');
    res.status(200).json({ message: 'File download process completed successfully' });
  } catch (error) {
    console.error('Error during file download process:', error);
    res.status(500).json({ error: error.message });
  }
}
