import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { MovieController } from './controllers/movie.controller';
import { movieProviders } from 'src/db/providers/movie.providers';
import { MovieService } from './services/movie.service';


@Module({
  imports: [DatabaseModule],
  controllers: [MovieController],
  providers: [
    MovieService,
    ...movieProviders,
  ],
})
export class MovieModule {}
