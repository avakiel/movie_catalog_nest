import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { favouriteProviders } from 'src/db/providers/favourite.providers';
import { FavouriteController } from './controllers/favourite.controller';
import { FavouriteService } from './services/favourite.service';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [FavouriteController],
  providers: [
    FavouriteService,
    ...favouriteProviders,
  ],
})
export class FavouriteModule {}
