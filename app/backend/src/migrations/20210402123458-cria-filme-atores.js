module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FilmesAtores', {
      filmeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Filmes',
          key: 'id'
        },
        allowNull: false
      },
      atorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Atores',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FilmeAtores');
  }
};