import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../database/database.module';
import { UsersService } from './users.service';
import { usersProvider } from '../provider/users.provider';
@Module({
  controllers: [UsersController],
  // providers: [UsersService],
  imports: [DatabaseModule],
  providers: [
    ...usersProvider,
    UsersService,
  ],
})
export class UsersModule{}