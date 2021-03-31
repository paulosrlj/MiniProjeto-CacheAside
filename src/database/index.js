import Sequelize from 'sequelize';
import redis from 'redis';
import databaseConfig from '../config/database';

import Produto from '../models/Produto';

const models = [Produto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

// Redis
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

(async function setRedis() {
  try {
    const pgProduto = await Produto.findAll();
    for (let i = 0; i < pgProduto.length; i += 1) {
      const { id, nome, preco } = pgProduto[i];
      const dados = { nome, preco };

      redisClient.setex(id, 3600, JSON.stringify(dados));
    }
  } catch (e) {
    throw new Error(e);
  }
})();

export default redisClient;
