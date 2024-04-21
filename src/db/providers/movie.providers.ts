import { Favourite } from "../entity/favourite.entity";
import { Future } from "../entity/future.entity";
import { Movie } from "../entity/movie.entity";
import { Watched } from "../entity/watched.entity";


export const movieProviders = [
  {
    provide: 'MOVIE_REPOSITORY',
    useValue: Movie,
  },
  {
    provide: 'FUTURE_REPOSITORY',
    useValue: Future,
  },
  {
    provide: 'WATCHED_REPOSITORY',
    useValue: Watched,
  },
  {
    provide: 'FAVOURITE_REPOSITORY',
    useValue: Favourite,
  },
];