const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Filmes = sequelize.define('filmes', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: DataTypes.STRING,
      ano_lancamento: DataTypes.INTEGER,
      disponivel: DataTypes.BOOLEAN,
    }, {
      tableName: 'filmes',
    });

  return Filmes
};