import redis from 'redis';

<<<<<<< HEAD
import './pg';
import './mongodb';
=======
import Produto from '../models/Produto';

const models = [Produto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
>>>>>>> parent of 7a30f8f... CRUD de pessoa e o começo de pedido

// Redis
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

export default redisClient;
