import { Controller, Get, Inject } from '@nestjs/common';
import {UserService} from '../../domain/services/user.service'

@Controller()
export class AppController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  @Get()
  async getData() {
    const users = await this.userService.getAllUsers()
    return {message: `Welcome to backend! Users: ${users.map(user => user.email).join(', ') }`};
  }
}
