import mongoose from '../database/mongodb';

const clienteSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  cpf: String,
  email: String,
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;
