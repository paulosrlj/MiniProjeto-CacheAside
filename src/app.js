require('dotenv').config();

import express from 'express';

import './database';

// Rotas
import produtoRotas from './routes/produto';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
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
