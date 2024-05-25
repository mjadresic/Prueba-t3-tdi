require('dotenv').config();

module.exports = {
  env: {
    BUCKET_NAME: process.env.BUCKET_NAME,
    GOOGLE_APPLICATION_CREDENTIALS_JSON: process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON,
  },
};
