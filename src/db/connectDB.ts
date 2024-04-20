// eslint-disable-next-line @typescript-eslint/no-var-requires
const { sequelize } = require("../db/index");


const connect = async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

connect();

