import { Inject, Injectable } from '@nestjs/common';
import { Movie } from 'src/db/entity/movie.entity';



@Injectable()
export class MovieService {
  constructor(
    @Inject('MOVIE_REPOSITORY')
    private movieRepository: typeof Movie
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.findAll();
  }
}