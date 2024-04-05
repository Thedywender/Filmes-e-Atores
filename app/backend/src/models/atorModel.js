const { Model, DataTypes } = require('sequelize');

class Atores extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      aniversario: DataTypes.DATE,
      nacionalidade: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsToMany(models.Movie, { through: 'FilmesAtores', as: 'filmes' });
  }
}

module.exports = Atores;