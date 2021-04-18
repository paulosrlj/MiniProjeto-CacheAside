import Sequelize from 'sequelize';
import redis from 'redis';
import databaseConfig from '../config/database';

import Produto from '../models/Produto';

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const porto = 8000;
// app.listen(porto, () => {
//   console.log(`Servidor em execução no porto ${porto}`);
// });

const models = [Produto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

// Redis
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

export default redisClient;
