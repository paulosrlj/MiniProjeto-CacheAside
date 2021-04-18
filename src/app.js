require('dotenv').config();

import express from 'express';

import './database';

// Rotas
import produtoRotas from './routes/produto';
import clienteRotas from './routes/cliente';
import pedidoRotas from './routes/pedido';

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
    this.app.use('/cliente', clienteRotas);
    this.app.use('/pedido', pedidoRotas);
  }
}

export default new App().app;
