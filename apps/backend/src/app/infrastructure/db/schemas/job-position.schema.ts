import { EntitySchema } from 'typeorm';
import { JobPosition } from '../../../domain/entities/job-position.entity';

export const JobPositionSchema = new EntitySchema<JobPosition>({
    name: 'JobPosition',
    target: JobPosition,
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      title: {
        type: String,
      },
    },
    relations: {
      createdBy: {
        type: 'many-to-one',
        target: 'User',
      },
      applications: {
        type: 'one-to-many',
        target: 'Application',
      }

    },
  });