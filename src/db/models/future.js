import { sequelize } from "../index.js";


export const Future = sequelize.define('Future', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull:false
  }
}, {
  tableName: 'future',
  timestamps: false
});

Future.belongsTo(Movie, { foreignKey: 'movieId', onDelete: 'cascade' });
