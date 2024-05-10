import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common'
import { FavouriteService } from '../services/favourite.service'
import { Movie } from 'src/db/entity/movie.entity'
import { AuthGuard } from 'src/auth/auth.guard'

@Controller('favourite')
@UseGuards(AuthGuard)
export class FavouriteController {
  constructor(private readonly favouriteService: FavouriteService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.favouriteService.findAll()
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.favouriteService.delete(id)
  }

  @Post()
  async create(@Body() id: string): Promise<Movie> {
    return this.favouriteService.create(id)
  }
}
