import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { FutureController } from './controllers/future.controller';
import { FutureService } from './services/future.service';
import { futureProviders } from 'src/db/providers/future.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [FutureController],
  providers: [
    FutureService,
    ...futureProviders,
  ],
})
export class FutureModule {}
