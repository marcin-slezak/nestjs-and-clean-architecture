import { Injectable, Inject } from '@nestjs/common';
import {IUserRepository} from '../interfaces/user-repository.interface'

@Injectable()
export class UserService {
    constructor(@Inject(IUserRepository) private readonly usersRepository: IUserRepository){}
    async getAllUsers(){
        // ... here can be put moreadvance business logic
        return this.usersRepository.getAllUsers();
    }
}