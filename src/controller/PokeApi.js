const HttpService = require("../utils/httpService");
const querystring = require("querystring");

class PokeApi {
  constructor() {
    this.httpService = new HttpService();
    this.serviceName = "pokemon";
  }

  async getPokemonList(params) {
    let result;
    const searchParams = {
      offset: 0,
      limit: 21
    };

    if (params && params.page) {
      searchParams.offset = params.page * 21;
    }

    const paramsQueryString = querystring.stringify(searchParams);

    try {
      result = await this.httpService.get(
        `${this.serviceName}/?${paramsQueryString}`
      );
    } catch (error) {
      throw error;
    }
    return result;
  }

  async getPokemonFighters({ A, B }) {
    let result;
    try {
      const pokemonA = await this.httpService.get(`${this.serviceName}/${A}`);
      const pokemonB = await this.httpService.get(`${this.serviceName}/${B}`);
      result = { pokemonA, pokemonB };
    } catch (error) {
      throw error;
    }
    return result;
  }
}

module.exports = PokeApi;
