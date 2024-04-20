import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';
import { Movie } from './movie';


export const Watched = sequelize.define('Watched', {
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
  tableName: 'watched',
  timestamps: false
});

Watched.belongsTo(Movie, { foreignKey: 'movieId', onDelete: 'cascade' });
