import { sequelize } from "../index.js";


export const Favourite = sequelize.define('Favourite', {
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
  tableName: 'favourite',
  timestamps: false
});

Favourite.belongsTo(Movie, { foreignKey: 'movieId', onDelete: 'cascade' });
