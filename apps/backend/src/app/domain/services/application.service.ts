import { Injectable, Inject } from '@nestjs/common';
import { IApplicationRepository } from '../interfaces/application-repository.interface';
import { Application } from '../entities/application.entity';

@Injectable()
export class ApplicationService {
  constructor(
    @Inject(IApplicationRepository) private readonly applicationRepository: IApplicationRepository
  ) {}

  async getAllApplications() {
    return this.applicationRepository.getAllApplications();
  }

  async addApplications(applicationInput: Partial<Application>): Promise<Application> {
    return this.applicationRepository.addApplication(applicationInput)
  }
}
