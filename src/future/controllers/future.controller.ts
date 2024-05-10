import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common'
import { FutureService } from '../services/future.service'
import { Movie } from 'src/db/entity/movie.entity'
import { AuthGuard } from 'src/auth/auth.guard'

@Controller('future')
@UseGuards(AuthGuard)
export class FutureController {
  constructor(private readonly futureService: FutureService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.futureService.findAll()
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.futureService.delete(id)
  }

  @Post()
  async create(@Body() id: string): Promise<Movie> {
    return this.futureService.create(id)
  }
}
