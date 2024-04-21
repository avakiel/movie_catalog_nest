import { Inject, Injectable } from '@nestjs/common';
import { Favourite } from 'src/db/entity/favourite.entity';


@Injectable()
export class FavouriteService {
  constructor(
    @Inject('FAVOURITE_REPOSITORY')
    private favouriteRepository: typeof Favourite
  ) {}

  async findAll(): Promise<Favourite[]> {
    return this.favouriteRepository.findAll();
  }
}