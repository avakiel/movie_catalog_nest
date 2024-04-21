import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { WatchedService } from '../services/watched.service'
import { Movie } from 'src/db/entity/movie.entity'

@Controller('watched')
export class WatchedController {
  constructor(private readonly watchedService: WatchedService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.watchedService.findAll()
  }

  @Post()
  async create(@Body() id: string): Promise<Movie> {
    return this.watchedService.create(id)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.watchedService.delete(id)
  }
}
