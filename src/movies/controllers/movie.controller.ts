import {  Body, Controller,  Delete,  Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Movie } from 'src/db/entity/movie.entity';
import { MovieService } from '../services/movie.service';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('movies')
@UseGuards(AuthGuard)
export class MovieController {
    constructor(private readonly movieService: MovieService) {} 

    @Get()
    async findAll(): Promise<Movie[]> {
        return this.movieService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Movie> {
        return this.movieService.findById(id);
    }

    @Get(':title')
    async findByTitle(@Param('title') title: string): Promise<Movie[]> {
        return this.movieService.findByTitle(title);
    }

    @Post()
    async create(@Body() movie: Omit<Movie, 'id'>): Promise<Movie> {
        return this.movieService.create(movie);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() movie: Omit<Movie, 'id'>): Promise<Movie> {
        return this.movieService.update(id, movie);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<string> {
        return this.movieService.delete(id);
    }
}