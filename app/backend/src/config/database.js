module.exports = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    database: 'movies',
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  // Adicione aqui as configurações para os ambientes de teste e produção
};