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

    if (params.page) {
      searchParams.offset = params.page * 21;
    }

    const paramsQueryString = querystring.stringify(searchParams);

    try {
      result = await this.httpService.get(
        `${this.serviceName}/?${paramsQueryString}`
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
    return result;
  }

  async getPokemonFighters({ A, B }) {
    let result;
    try {
      // console.log({ A, B });
      const pokemonA = await this.httpService.get(`${this.serviceName}/${A}`);
      const pokemonB = await this.httpService.get(`${this.serviceName}/${B}`);
      console.log(pokemonA.name);
      console.log(pokemonB.name);
      result = { pokemonA, pokemonB };
    } catch (error) {
      console.log(error);
      throw error;
    }
    return result;
  }
}

module.exports = PokeApi;
