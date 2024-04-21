import { Inject, Injectable } from '@nestjs/common';
import { Watched } from 'src/db/entity/watched.entity';




@Injectable()
export class WatchedService {
  constructor(
    @Inject('WATCHED_REPOSITORY')
    private watchedRepository: typeof Watched
  ) {}

  async findAll(): Promise<Watched[]> {
    return this.watchedRepository.findAll();
  }
}