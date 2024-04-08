const app = require('./app');
const { sequelize } = require('./models');

// sequelize.sync({ force: true }).then(() => {
//   console.log('Database connected and synced');
// });

app.listen(3001, () => console.log('server running on port 3001'));