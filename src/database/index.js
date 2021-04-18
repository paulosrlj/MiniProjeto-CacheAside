import redis from 'redis';

import './pg';
import './mongodb';

// Redis
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

export default redisClient;
