const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const FilmesAtores = sequelize.define('FilmesAtores', {
        filmeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'filmes',
                key: 'id',
            }
        },
        atorId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'atores',
                key: 'id',
            }
        },
    }, {
        tableName: 'FilmesAtores',
        timestamps: false,
    });

    FilmesAtores.associate = (models) => {
        models.atores.belongsToMany(models.filmes, {
            through: FilmesAtores,
            foreignKey: 'atorId',
            otherKey: 'filmeId',
            as: 'filmes',
        });

        models.filmes.belongsToMany(models.atores, {
            through: FilmesAtores,
            foreignKey: 'filmeId',
            otherKey: 'atorId',
            as: 'atores',
        });
    }
    
    return FilmesAtores;
}