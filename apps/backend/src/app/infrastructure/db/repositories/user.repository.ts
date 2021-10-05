import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserRepository } from '../../../domain/interfaces/user-repository.interface';
import { User } from '../../../domain/entities/user.entity';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly typeOrmUserRepository: Repository<User>
  ) {}
  getAllUsers() {
    return this.typeOrmUserRepository.find();
  }
  addUser(userInput){
    return this.typeOrmUserRepository.save(userInput);
  }
}
