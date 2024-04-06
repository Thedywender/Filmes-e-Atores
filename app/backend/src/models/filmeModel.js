const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Filmes = sequelize.define('Filmes', {
      titulo: DataTypes.STRING,
      ano_lancamento: DataTypes.INTEGER,
      disponivel: DataTypes.BOOLEAN,
    });

  Filmes.associate = models => {
    Filmes.belongsToMany(models.Actor, { through: 'FilmesAtores', as: 'atores' });
  };

  return Filmes
};