import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Movie } from './movie.entity';


@Table({ tableName: 'watched', timestamps: false })
export class Watched extends Model {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id!: number;

  @ForeignKey(() => Movie)
  @Column
  movieId!: number;

  @BelongsTo(() => Movie)
  movie!: Movie
}
