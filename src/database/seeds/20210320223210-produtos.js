module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'produtos',
      [
        {
          nome: 'Produto1',
          preco: 20.25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Produto1',
          preco: 20.25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Produto1',
          preco: 20.25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Produto1',
          preco: 20.25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Produto1',
          preco: 20.25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Produto1',
          preco: 20.25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Produto1',
          preco: 20.25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Produto1',
          preco: 20.25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Produto1',
          preco: 20.25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Produto1',
          preco: 20.25,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('produtos', null, {});
  },
};