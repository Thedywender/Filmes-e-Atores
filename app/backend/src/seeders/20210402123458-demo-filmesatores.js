module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('FilmesAtores', [
      { filmeId: 1, atorId: 1, createdAt: new Date(), updatedAt: new Date() },
      { filmeId: 2, atorId: 3, createdAt: new Date(), updatedAt: new Date() },
      { filmeId: 3, atorId: 2, createdAt: new Date(), updatedAt: new Date() },
      { filmeId: 4, atorId: 5, createdAt: new Date(), updatedAt: new Date() },
      { filmeId: 5, atorId: 2, createdAt: new Date(), updatedAt: new Date() },
      { filmeId: 2, atorId: 10, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('FilmesAtores', null, {});
  }
};