import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/dto/User.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    async login(@Body() user: UserDto) {
        return this.authService.login(user);
    }

    @Post('/register')
    async register(@Body() user: UserDto) {
        return this.authService.register(user);
    }
}
