import { Favourite } from "../entity/favourite.entity";

export const favouriteProviders = [
  {
    provide: 'FAVOURITE_REPOSITORY',
    useValue: Favourite,
  },
];