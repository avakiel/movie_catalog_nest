import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserDto } from 'src/dto/User.dto'
import { UserService } from 'src/user/services/user.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(userDto: UserDto) {
    const user = await this.validateUser(userDto)
    return this.generateToken(user)
  }

  async register(userDto: UserDto) {
    const canditate = await this.userService.findOne(userDto.username)

    if (canditate) {
        throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
    }

    const hashedPassword = await bcrypt.hash(userDto.password, 5)

    const createdUser = await this.userService.create({
        ...userDto,
        username: userDto.username,
        password: hashedPassword
    })

    return this.generateToken(createdUser)
  }

   private async generateToken(user: UserDto) {
    const payload = { username: user.username, role: user.role }
    return {
        token: this.jwtService.sign(payload)
    }
  }

  private async validateUser(userDto: UserDto) {
    const user = await this.userService.findOne(userDto.username)
    const passwordEquals = await bcrypt.compare(userDto.password, user.password)

    if (user && passwordEquals) {
        return user
    } else {
        throw new UnauthorizedException('Invalid username or password')
    }
  }
}
