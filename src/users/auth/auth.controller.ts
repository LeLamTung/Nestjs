import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { RegisterUserDto } from 'src/dto/register.dto';
import { UsersService } from '../users.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UsersService) {}

    @Get("register")
    @Render('auth/register')
    showFormregister() {
        return {};
    }

    @Post("register")
    @Redirect("/auth/register")
    register(@Body() registerUserDto: RegisterUserDto)  {
        this.userService.createUser(registerUserDto);
    }
}