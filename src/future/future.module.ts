import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { FutureController } from './controllers/future.controller';
import { FutureService } from './services/future.service';
import { futureProviders } from 'src/db/providers/future.providers';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [FutureController],
  providers: [
    FutureService,
    ...futureProviders,
  ],
})
export class FutureModule {}
