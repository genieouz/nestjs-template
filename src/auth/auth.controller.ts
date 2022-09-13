import { Body, Controller, Post } from '@nestjs/common';
import { IUser } from '~/user/schemas/interfaces/user.interface';
import { AuthService } from './auth.service';
import { Session } from './dto/session.type';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() user: IUser): Promise<Session> {
        return this.authService.register(user);
    }

    @Post('login')
    login(@Body() credentials: IUser): Promise<Session> {
        return this.authService.login(credentials);
    }
}
