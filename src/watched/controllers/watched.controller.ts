import {  Controller,  Get } from '@nestjs/common';
import { WatchedService } from '../services/watched.service';
import { Watched } from 'src/db/entity/watched.entity';


@Controller('watched')
export class WatchedController {
    constructor(private readonly watchedService: WatchedService) {} 

    @Get()
    async findAll(): Promise<Watched[]> {
      return this.watchedService.findAll();
    }
}