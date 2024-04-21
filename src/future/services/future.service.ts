import { Inject, Injectable } from '@nestjs/common';
import { Future } from 'src/db/entity/future.entity';




@Injectable()
export class FutureService {
  constructor(
    @Inject('FUTURE_REPOSITORY')
    private futureRepository: typeof Future
  ) {}

  async findAll(): Promise<Future[]> {
    return this.futureRepository.findAll();
  }
}