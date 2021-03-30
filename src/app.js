import express from 'express';
import Sequelize from 'sequelize';
import dbconfig from './config/database';
import Produto from './models/Produto';

// Rotas
import produtoRotas from './routes/produto';

const redis = require('redis');

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();

    const connection = new Sequelize(dbconfig);
    Produto.init(connection);
    this.setRedis();
    // Produto.create({
    //   nome: 'Produto5',
    //   preco: 12.11,
    // });
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use('/produto', produtoRotas);
  }

  async setRedis() {
    try {
      const pgProduto = await Produto.findAll();
      for (let i = 0; i < pgProduto.length; i += 1) {
        const { id, nome, preco } = pgProduto[i];
        const dados = { nome, preco };
        client.setex(id, 3600, JSON.stringify(dados));
      }
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new App().app;
