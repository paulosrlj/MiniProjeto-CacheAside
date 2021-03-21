import express from 'express';
import Sequelize from 'sequelize';
import dbconfig from './config/database';
import Produto from './models/Produto';

// Rotas
import produtoRotas from './routes/produto';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();

    const connection = new Sequelize(dbconfig);
    Produto.init(connection);
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
}

export default new App().app;
