const axios = require("axios");
const config = require("../config");

class HttpService {
  constructor() {
    const baseUrl = config.BASE_URL | "https://pokeapi.co/api/v2/";

    const axiosConfigRequest = {
      baseURL: `${baseUrl}/`,
      headers: {
        Accept: "application/json"
      }
    };
    this.http = axios.create(axiosConfigRequest);
  }

  async get(url) {
    let serviceResult;
    try {
      console.log({ url });
      serviceResult = await this.http.get(url);
    } catch (error) {
      console.log(error);
      throw error;
    }
    return serviceResult.data;
  }
}

module.exports = HttpService;
