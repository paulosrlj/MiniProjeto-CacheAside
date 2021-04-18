import mongoose from '../database/mongodb';

const pedidoSchema = new mongoose.Schema({
  produtos: [],
  cliente: String,
  valorTotal: Number,
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

export default Pedido;
