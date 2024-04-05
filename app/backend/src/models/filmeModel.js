const { Model, DataTypes } = require('sequelize');

class Filmes extends Model {
  static init(sequelize) {
    super.init({
      titulo: DataTypes.STRING,
      lancamento: DataTypes.INTEGER,
      disponivel: DataTypes.BOOLEAN,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsToMany(models.Actor, { through: 'FilmesAtores', as: 'atores' });
  }
}

module.exports = Filmes;