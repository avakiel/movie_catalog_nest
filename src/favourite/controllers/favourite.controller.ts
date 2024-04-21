import {  Controller,  Get } from '@nestjs/common';
import { Favourite } from 'src/db/entity/favourite.entity';
import { FavouriteService } from '../services/favourite.service';


@Controller('favourite')
export class FavouriteController {
    constructor(private readonly favouriteService: FavouriteService) {} 

    @Get()
    async findAll(): Promise<Favourite[]> {
      return this.favouriteService.findAll();
    }
}