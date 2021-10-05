import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { User } from '../entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @Inject(IUserRepository) private readonly usersRepository: IUserRepository
  ) {}

  async getAllUsers() {
    // ... here can be put moreadvance business logic
    return this.usersRepository.getAllUsers();
  }

  async addUser(userInput: Partial<User>): Promise<User> {
    return this.usersRepository.addUser(userInput)
  }
}
