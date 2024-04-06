module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Filmes', [
      { titulo: 'Forrest Gump', ano_lancamento: 1994, disponivel: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Pulp Fiction', ano_lancamento: 1994, disponivel: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'The Shawshank Redemption', ano_lancamento: 1994, disponivel: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'The Godfather', ano_lancamento: 1972, disponivel: true, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'The Dark Knight', ano_lancamento: 2008, disponivel: true, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Filmes', null, {});
  }
};