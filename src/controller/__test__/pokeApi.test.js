const PokeApi = require("../PokeApi");
let pokeApi = new PokeApi();
beforeAll(async () => {});

describe("Poke Api Controller:", () => {
  test("should validate total pokemon count and result length", async () => {
    const response = await pokeApi.getPokemonList();
    expect(response.count).toBeGreaterThanOrEqual(964);
    expect(response.results.length).toEqual(21);
  });
  test("should validate pokemon fighters pikachu and bulbasaur and not mewtwo ", async () => {
    const response = await pokeApi.getPokemonFighters({ A: 25, B: 1 });
    expect(response.pokemonA).toBeDefined();
    expect(response.pokemonB).toBeDefined();
    expect(response.pokemonA.name).toBe("pikachu");
    expect(response.pokemonB.name).toBe("bulbasaur");
    expect(response.pokemonB.name).not.toBe("mewtwo");
  });
});
