import { Watched } from "../entity/watched.entity";


export const watchedProviders = [
  {
    provide: 'WATCHED_REPOSITORY',
    useValue: Watched,
  },
];