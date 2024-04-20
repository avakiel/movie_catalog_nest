import {  Controller,  Get } from '@nestjs/common';
import { Movie } from 'src/db/entity/movie.entity';
import { MovieService } from './movies.service';


@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MovieService) {} 

    @Get()
    async findAll(): Promise<Movie[]> {
      return this.movieService.findAll();
    }
}