const Dotenv = require("dotenv");

Dotenv.config();

const config = {
  API_PORT: process.env.API_PORT | 8000,
  BASE_URL: process.env.BASE_URL | "https://pokeapi.co/api/v2/"
};

module.exports = config;
