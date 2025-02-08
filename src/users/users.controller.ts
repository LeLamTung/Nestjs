import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('users')
export class UsersController {
    // @Get('/')
    // @Render('users/list') //returns views
    // getUsers() {
    //     return { users: [{ id: 1 }, { name: 'Jane Doe' }] };
    // }

    @Get(":id")
    @Render('users/detail') //returns views
    getUsersDetail(@Param("id") userId: number) {
        return {user :{id: userId ,name: 'Jane Doe'}};
    }
}
