import { Controller, Get, Render, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('/')
    @Render('users/list') // returns views
    getUsers() {
        return { users: [{ id: 1, name: 'John Doe' }] };
    }

    @Get(":id")
    @Render('users/detail') // returns views
    getUserDetail(@Param("id") userId: number) {
        return { user: { id: userId, name: 'John Doe' } };
    }
}