import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import {UserService} from '../../domain/services/user.service'
import {CreateUserDto} from '../dto/create-user.dto'

@Controller()
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  @Get('/users')
  async getUsers() {
    const users = await this.userService.getAllUsers()
    return {users};
  }

  @Post('/user')
  async addUser(@Body() createUserDto: CreateUserDto){
    return this.userService.addUser(createUserDto)
  }
}
