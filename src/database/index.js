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

export default redisClient;
