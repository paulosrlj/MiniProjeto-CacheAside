module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'produtos',
      [
        {
          nome: 'PS5',
          preco: 6666,
        },
        {
          nome: 'Lençol 150x200',
          preco: 40,
        },
        {
          nome: 'Cadeira Gamer',
          preco: 2000,
        },
        {
          nome: 'Mousepad',
          preco: 50,
        },
        {
          nome: 'Vinho',
          preco: 50,
        },
        {
          nome: 'Tinta guache',
          preco: 1,
        },
        {
          nome: 'Notebook Dell i9 16GB RAM 2TB',
          preco: 6666,
        },
        {
          nome: 'Xbox 360',
          preco: 5656,
        },
        {
          nome: 'Teclado gamer RGB',
          preco: 450,
        },
        {
          nome: 'Garrafa de água 500ml',
          preco: 30,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('produtos', null, {});
  },
};
