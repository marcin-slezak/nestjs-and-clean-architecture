import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import {JobPositionService} from '../../domain/services/job-position.service'
import {CreateJobPositionDto} from '../dto/create-job-position.dto'

@Controller()
export class JobPositionController {
  constructor(
    @Inject(JobPositionService)
    private readonly jobPositionService: JobPositionService,
  ) {}

  @Get('/job-positions')
  async getJobPositions() {
    const jobPositions = await this.jobPositionService.getAllJobPositions()
    return {jobPositions: jobPositions.map(jp => ({...jp, slug: jp.getSlug()}))};
  }

  @Post('/job-position')
  async addJobPosition(@Body() createJobPositionDto: CreateJobPositionDto){
    return this.jobPositionService.addJobPosition(createJobPositionDto)
  }
}
