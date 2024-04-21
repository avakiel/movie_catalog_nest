import {  Controller,  Get } from '@nestjs/common';
import { Movie } from 'src/db/entity/movie.entity';
import { MovieService } from '../services/movie.service';


@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {} 

    @Get()
    async findAll(): Promise<Movie[]> {
      return this.movieService.findAll();
    }
}