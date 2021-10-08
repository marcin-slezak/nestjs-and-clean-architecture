import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IJobPositionRepository } from '../../../domain/interfaces/job-position-repository.interface';
import { JobPosition } from '../../../domain/entities/job-position.entity';

export class JobPositionRepository implements IJobPositionRepository{
  constructor(
    @InjectRepository(JobPosition)
    private readonly typeOrmJobPositionRepository: Repository<JobPosition>
  ) {}
  getAllJobPositions() {
    return this.typeOrmJobPositionRepository.find();
  }
  addJobPosition(userInput){
    return this.typeOrmJobPositionRepository.save(userInput);
  }
}
