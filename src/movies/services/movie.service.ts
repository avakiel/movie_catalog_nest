import { Inject, Injectable } from '@nestjs/common'
import { Op } from 'sequelize'
import { Movie } from 'src/db/entity/movie.entity'

@Injectable()
export class MovieService {
  constructor(
    @Inject('MOVIE_REPOSITORY')
    private movieRepository: typeof Movie
  ) {}

  async findAll(): Promise<Movie[]> {
    try {
      return await this.movieRepository.findAll()
    } catch (error) {
      throw new Error(`Error while fetching movies: ${error.message}`)
    }
  }

  async findByTitle(title: string): Promise<Movie[]> {
    try {
      const movies = await Movie.findAll({
        where: {
          title: {
            [Op.iLike]: `%${title}%`,
          },
        },
      })
      return movies
    } catch (error) {
      throw new Error(`Error while finding movies by title: ${error.message}`)
    }
  }

  async delete(id: string) {
    try {
      await Movie.destroy({
        where: {
          id: +id,
        },
      })
      return id
    } catch (error) {
      throw new Error(`Error while deleting movie: ${error.message}`)
    }
  }

  async create(movie: Omit<Movie, 'id'>): Promise<Movie> {
    try {
      return await this.movieRepository.create(movie)
    } catch (error) {
      throw new Error(`Error while creating movie: ${error.message}`)
    }
  }

  async update(id: string, movie: Omit<Movie, 'id'>): Promise<Movie> {
    try {
      await this.movieRepository.update(movie, {
        where: {
          id: +id,
        },
      })

      const updatedMovie = await this.movieRepository.findByPk(+id)
      if (!updatedMovie) {
        throw new Error(`Movie with id ${id} not found`)
      }

      return updatedMovie
    } catch (error) {
      throw new Error(`Error while updating movie: ${error.message}`)
    }
  }
}
