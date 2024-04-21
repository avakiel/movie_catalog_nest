import { Future } from "../entity/future.entity";

export const futureProviders = [
  {
    provide: 'FUTURE_REPOSITORY',
    useValue: Future,
  }
];