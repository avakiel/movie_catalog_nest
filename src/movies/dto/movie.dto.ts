import { ApiProperty } from '@nestjs/swagger';

export class MoviesDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    rating: number;

    @ApiProperty()
    release_date: string;

    @ApiProperty()
    genre: string[];

    @ApiProperty()
    actors: string[];

    @ApiProperty()
    director: string;

    @ApiProperty()
    image: string;

    constructor(data: Partial<MoviesDto>) {
        Object.assign(this, data);
    }
}
