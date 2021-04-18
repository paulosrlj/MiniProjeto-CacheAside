import ProdutoController from './ProdutoController';

require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(
  `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
  { useUnifiedTopology: true }
);

// // async function getPessoas() {
// //   try {
// //     await client.connect();
// //     const database = client.db(`${process.env.MONGO_DATABASE}`);
// //     const pessoas = database.collection('Pessoa');

// //     const filter = { idade: { $gt: 20 } };
// //     await pessoas.find().forEach((p) => console.log(p));
// //   } finally {
// //     await client.close();
// //   }
// // }

// async function addPessoa(obj) {
//   try {
//     await client.connect();
//     const pessoas = client
//       .db(`${process.env.MONGO_DATABASE}`)
//       .collection('Pessoa');

//     await pessoas.insertOne(obj).then(() => {
//       console.log('Inserido');
//     });
//   } finally {
//     await client.close();
//   }
// }

// eslint-disable-next-line no-unused-vars
const lulu = {
  nome: 'lulu',
  idade: 20,
  cpf: 11111111111,
  email: 'lulu@gmail.com',
};
// addPessoa(lulu);

// // async function updatePessoa() {
// //   try {
// //     await client.connect();
// //     const pessoas = client
// //       .db(`${process.env.MONGO_DATABASE}`)
// //       .collection('Pessoa');

// //     const query = { nome: 'Paulo Freitas' };
// //     const update = { $set: { nome: 'Francisco Paulo de Freitas Neto' } };
// //     await pessoas.updateOne(query, update).then(console.log('Atualizado!'));
// //   } finally {
// //     await client.close();
// //   }
// // }

// // async function deletePessoa(filter) {
// //   try {
// //     await client.connect();
// //     const pessoas = client
// //       .db(`${process.env.MONGO_DATABASE}`)
// //       .collection('Pessoa');

// //     const result = await pessoas.deleteOne(filter);
// //     console.log(`${result.deletedCount} documentos removidos`);
// //   } finally {
// //     await client.close();
// //   }
// // }

// // getPessoas();

// // updatePessoa();

// // const filter = {nome: 'Francisco Paulo de Freitas Neto'};
// // deletePessoa(filter);

// require('dotenv').config();

// const mongoose = require('mongoose');

async function addPedido(obj) {
  try {
    await client.connect();
    const pedido = client
      .db(`${process.env.MONGO_DATABASE}`)
      .collection('Pedidos');

    await pedido.insertOne(obj).then(() => {
      console.log('Inserido');
    });
  } finally {
    await client.close();
  }
}
const produto = {};

const quantidade = 5;

const valorTotal = quantidade * produto.preco;

const pedido = {
  lulu,
  produto,
  quantidade,
  valorTotal,
};
addPedido(pedido);
