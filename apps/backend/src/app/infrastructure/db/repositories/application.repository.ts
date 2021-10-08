import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IApplicationRepository } from '../../../domain/interfaces/application-repository.interface';
import { Application } from '../../../domain/entities/application.entity';

export class ApplicationRepository implements IApplicationRepository {
  constructor(
    @InjectRepository(Application)
    private readonly typeOrmApplicationRepository: Repository<Application>
  ) {}
  getAllApplications() {
    return this.typeOrmApplicationRepository.find();
  }
  addApplication(applicationInput){
    return this.typeOrmApplicationRepository.save(applicationInput);
  }
}
