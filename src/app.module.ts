import { Module } from '@nestjs/common';
import { MovieModule } from './movies/movie.module';
import { FutureModule } from './future/future.module';
import { WatchedModule } from './watched/watched.module';
import { FavouriteModule } from './favourite/favourite.module';


@Module({
  imports: [MovieModule, FutureModule, WatchedModule, FavouriteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
