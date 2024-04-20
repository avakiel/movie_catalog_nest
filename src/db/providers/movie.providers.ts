import { Movie } from "../entity/movie.entity";


export const movieProviders = [
  {
    provide: 'MOVIE_REPOSITORY',
    useValue: Movie,
  },
];