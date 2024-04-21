import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Movie } from './movie.entity';


@Table({ tableName: 'future', timestamps: false })
export class Future extends Model {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id!: number;

  @ForeignKey(() => Movie)
  @Column
  movieId!: number;

  @BelongsTo(() => Movie)
  movie!: Movie; 
}
