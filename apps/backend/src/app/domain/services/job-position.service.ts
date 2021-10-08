import { Injectable, Inject } from '@nestjs/common';
import { IJobPositionRepository } from '../interfaces/job-position-repository.interface';
import { JobPosition } from '../entities/job-position.entity';

@Injectable()
export class JobPositionService {
  constructor(
    @Inject(IJobPositionRepository) private readonly jobPositionRepository: IJobPositionRepository
  ) {}

  async getAllJobPositions() {

    return this.jobPositionRepository.getAllJobPositions();
  }

  async addJobPosition(jobPositionInput: Partial<JobPosition>): Promise<JobPosition> {
    return this.jobPositionRepository.addJobPosition(jobPositionInput)
  }
}
