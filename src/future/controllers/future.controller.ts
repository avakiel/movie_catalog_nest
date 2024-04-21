import {  Controller,  Get } from '@nestjs/common';
import { FutureService } from '../services/future.service';
import { Future } from 'src/db/entity/future.entity';


@Controller('future')
export class FutureController {
    constructor(private readonly futureService: FutureService) {} 

    @Get()
    async findAll(): Promise<Future[]> {
      return this.futureService.findAll();
    }
}