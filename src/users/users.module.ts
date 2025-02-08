import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../database/database.module';
import { UsersService } from './users.service';
import { usersProviders } from './users.provider';
import { AuthController } from './auth/auth.controller';
@Module({
  controllers: [UsersController, AuthController],
  // providers: [UsersService],
  imports: [DatabaseModule],
  providers: [
    ...usersProviders,
    UsersService,
  ],
})
export class UsersModule{}