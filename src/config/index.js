const Dotenv = require("dotenv");

Dotenv.config();
const port = process.env.API_PORT || 3000;
const baseUrl = process.env.BASE_URL || "127.0.0.1";
const config = {
  API_PORT: port,
  BASE_URL: baseUrl
};

module.exports = config;
