import { JobPosition } from '../entities/job-position.entity'

export abstract class IJobPositionRepository {
    abstract getAllJobPositions(): Promise<JobPosition[]>
    abstract addJobPosition(jobPositionDto: Partial<JobPosition>): Promise<JobPosition>
}