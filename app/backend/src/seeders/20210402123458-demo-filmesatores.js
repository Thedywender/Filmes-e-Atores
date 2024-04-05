export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('FilmesAtores', [
      { FilmeId: 1, AtorId: 1, createdAt: new Date(), updatedAt: new Date() },
      { FilmeId: 2, AtorId: 3, createdAt: new Date(), updatedAt: new Date() },
      { FilmeId: 3, AtorId: 2, createdAt: new Date(), updatedAt: new Date() },
      { FilmeId: 4, AtorId: 5, createdAt: new Date(), updatedAt: new Date() },
      { FilmeId: 5, AtorId: 2, createdAt: new Date(), updatedAt: new Date() },
      { FilmeId: 2, AtorId: 10, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FilmesAtores', null, {});
  }
};