import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { MoviesController } from './movies.controller';
import { movieProviders } from 'src/db/providers/movie.providers';
import { MovieService } from './movies.service';


@Module({
  imports: [DatabaseModule],
  controllers: [MoviesController],
  providers: [
    MovieService,
    ...movieProviders,
  ],
})
export class MoviesModule {}
