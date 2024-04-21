import { Inject, Injectable } from '@nestjs/common'
import { Favourite } from 'src/db/entity/favourite.entity'
import { Movie } from 'src/db/entity/movie.entity'

@Injectable()
export class FavouriteService {
  constructor(
    @Inject('FAVOURITE_REPOSITORY')
    private favouriteRepository: typeof Favourite
  ) {}

  async findAll(): Promise<Movie[]> {
    try {
      const favourites = await this.favouriteRepository.findAll({
        include: [Movie],
      })

      const movies = favourites.map((favourite) => favourite.movie)

      return movies
    } catch (error) {
      console.error('Error fetching favourite movies:', error)
      throw error
    }
  }

  async delete(id: string) {
    try {
      await this.favouriteRepository.destroy({
        where: {
          movieId: +id,
        },
      })

      return id
    } catch (error) {
      console.error('Error deleting from favourites:', error)
      throw new Error('Delete error in database')
    }
  }

  async create(id: string) {
    try {
      await this.favouriteRepository.findOrCreate({
        where: {
          id: +id,
        },
      })

      const movie = await Movie.findOne({
        where: {
          id: +id,
        },
      })

      return movie
    } catch (error) {
      console.error('Error adding to favourites:', error)
      throw new Error('Addition error in database')
    }
  }
}
