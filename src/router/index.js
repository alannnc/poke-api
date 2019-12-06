const Router = require("koa-router");
const compose = require("koa-compose");
const router = new Router();
const PokeApi = require("../controller/index");

router.get("/pokemons", async ctx => {
  const { page } = ctx.query;
  const pokeService = new PokeApi();
  let result;

  try {
    const serviceResult = await pokeService.getPokemonList({ page });
    const customBody = {
      count: serviceResult.count,
      results: serviceResult.results
    };
    result = customBody;
  } catch (error) {
    throw error;
  }

  ctx.status = 200;
  ctx.body = result;
});

router.get("/fight", async ctx => {
  const { A, B } = ctx.query;
  if (!A && !B) {
    ctx.status = 404;
    return;
  }
  const pokeService = new PokeApi();
  let result;
  try {
    const serviceResult = await pokeService.getPokemonFighters({ A, B });
    const customBody = {
      results: serviceResult
    };
    result = customBody;
  } catch (error) {
    throw error;
  }

  ctx.status = 200;
  ctx.body = result;
});

module.exports = compose([router.routes(), router.allowedMethods()]);
