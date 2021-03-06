const axios = require("axios");
const config = require("../config");

class HttpService {
  constructor() {
    const baseUrl = config.BASE_URL;

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
      serviceResult = await this.http.get(url);
    } catch (error) {
      throw error;
    }
    return serviceResult.data;
  }
}

module.exports = HttpService;
