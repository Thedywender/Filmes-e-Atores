const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Filmes = sequelize.define('filmes', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ano_lancamento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      disponivel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    }, {
      tableName: 'filmes',
      timestamps: false,
      underscored: true,
    });

  return Filmes
};