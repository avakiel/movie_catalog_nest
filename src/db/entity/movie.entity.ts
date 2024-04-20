import { DataTypes } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';


@Table({ tableName: 'movies', timestamps: false, collate: 'utf8_general_ci' })
export class Movie extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column
  title!: string;

  @Column
  description!: string;

  @Column
  rating!: number;

  @Column
  release_date!: string;

  @Column({ type: DataTypes.JSONB })
  genre!: string[];

  @Column({ type: DataTypes.JSONB })
  actors!: string[];

  @Column
  director!: string;

  @Column
  image!: string;
}
