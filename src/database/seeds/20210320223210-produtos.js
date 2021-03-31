module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'produtos',
      [
        {
          nome: 'PS5',
          preco: 4199,
        },
        {
          nome: 'Lençol 150x200',
          preco: 40,
        },
        {
          nome: 'Cadeira Gamer',
          preco: 2150.22,
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
          preco: 6200.5,
        },
        {
          nome: 'Xbox 360',
          preco: 4099.22,
        },
        {
          nome: 'Teclado gamer RGB',
          preco: 450,
        },
        {
          nome: 'Garrafa de água 500ml',
          preco: 3.5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('produtos', null, {});
  },
};
