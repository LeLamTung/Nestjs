import { Injectable, Inject } from '@nestjs/common';
import { RegisterUserDto } from 'src/dto/register.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
      ) {}
    
      async findAll(): Promise<User[]> {
        return this.userRepository.find();
      }

      async createUser(data: RegisterUserDto): Promise<User> {
        const user = new User();
        Object.assign(user, data);
        return this.userRepository.save(user);
      }
}