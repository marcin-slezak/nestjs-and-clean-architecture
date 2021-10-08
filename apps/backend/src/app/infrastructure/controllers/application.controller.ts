import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import {ApplicationService} from '../../domain/services/application.service'
import {CreateApplicationDto} from '../dto/create-application.dto'

@Controller()
export class ApplicationController {
  constructor(
    @Inject(ApplicationService)
    private readonly applicationService: ApplicationService,
  ) {}

  @Get('/applications')
  async getApplication() {
    const applications = await this.applicationService.getAllApplications()
    return {applications};
  }

  @Post('/application')
  async addApplication(@Body() createApplicationDto: CreateApplicationDto){
    return this.applicationService.addApplications(createApplicationDto)
  }
}
