import { Controller, Get, Render } from '@nestjs/common';
import { RegisterUserDto } from 'src/dto/register.dto';

@Controller('auth')
export class AuthController {
    @Get('/register')
    @Render('auth/register)
    register(){
        return{}
    }
    @Post("Register")
    register(@Body() RegisterUserDto;RegisterUserDto) {
    console.log(RegisterUserDto.name);
}
}
