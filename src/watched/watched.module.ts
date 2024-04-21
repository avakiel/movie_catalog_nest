import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { watchedProviders } from 'src/db/providers/watched.providers';
import { WatchedService } from './services/watched.service';
import { WatchedController } from './controllers/watched.controller';


@Module({
  imports: [DatabaseModule],
  controllers: [WatchedController],
  providers: [
    WatchedService,
    ...watchedProviders,
  ],
})
export class WatchedModule {}
