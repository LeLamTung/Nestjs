import { Inject, Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/dto/register.dto';
import { User } from 'src/entity/User.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private UserRepository: Repository<User>,
      ) {}
    
      async findAll(): Promise<User[]> {
        return this.UserRepository.find();
      }
      async createUser(data: RegisterUserDto):Promise<User>{
        const user = new User();
        Object.assign(user,data);
        return this.UserRepository.save(user);
      }
}
