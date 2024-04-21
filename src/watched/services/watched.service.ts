import { Inject, Injectable } from '@nestjs/common';
import { Movie } from 'src/db/entity/movie.entity';
import { Watched } from 'src/db/entity/watched.entity';




@Injectable()
export class WatchedService {
  constructor(
    @Inject('WATCHED_REPOSITORY')
    private watchedRepository: typeof Watched
  ) {}

  async findAll(): Promise<Movie[]> {
    try {
      const watchedList = await this.watchedRepository.findAll({
        include: [Movie],
      });

      const movies = watchedList.map((watched) => watched.movie);

      return movies;
    } catch (error) {
      console.error('Error fetching watched movies:', error);
      throw error;
    }
  }

  async create(id: string): Promise<Movie> {
    try {
      await this.watchedRepository.findOrCreate({
        where: {
          id: +id,
        },
      });

      const movie = await Movie.findOne({
        where: {
          id: +id,
        },
      });

      return movie;
    } catch (error) {
      console.error('Error adding to watched:', error);
      throw new Error('Addition error in database');
    }
  }

  async delete(id: string) {
    try {
      await this.watchedRepository.destroy({
        where: {
          movieId: +id,
        },
      });

      return id;
    } catch (error) {
      console.error('Error deleting from watched:', error);
      throw new Error('Delete error in database');
    }
  }
}