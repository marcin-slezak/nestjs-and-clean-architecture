import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {

  @Get()
  welcome() {  
    return {message: 'Welcome to backend!'};
  }

}
