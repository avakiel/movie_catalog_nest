import { Inject, Injectable } from '@nestjs/common'
import { Future } from 'src/db/entity/future.entity'
import { Movie } from 'src/db/entity/movie.entity'

@Injectable()
export class FutureService {
  constructor(
    @Inject('FUTURE_REPOSITORY')
    private futureRepository: typeof Future
  ) {}

  async findAll(): Promise<Movie[]> {
    try {
      const futures = await this.futureRepository.findAll({
        include: [Movie],
      })

      const movies = futures.map((future) => future.movie)

      return movies
    } catch (error) {
      console.error('Error fetching future movies:', error)
      throw error
    }
  }

  async delete(id: string) {
    try {
      await this.futureRepository.destroy({
        where: {
          movieId: +id,
        },
      })

      return id
    } catch (error) {
      console.error('Error deleting from future:', error)
      throw new Error('Delete error in database')
    }
  }

  async create(id: string) {
    try {
      await this.futureRepository.findOrCreate({
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
      console.error('Error adding to future:', error)
      throw new Error('Addition error in database')
    }
  }
}
