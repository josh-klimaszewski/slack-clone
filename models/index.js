import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'slack',
  'postgres',
  'Strobelight69!',
);
const models = {
  user: sequelize.import('./users'),
  channel: sequelize.import('./channel'),
  user: sequelize.import('./users'),
  user: sequelize.import('./users'),
  user: sequelize.import('./users'),
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
