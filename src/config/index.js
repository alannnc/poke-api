const Dotenv = require('dotenv');

Dotenv.config();

const config = {
  API_PORT: process.env.API_PORT,
  BASE_URL: process.env.BASE_URL
};

module.exports = config;
