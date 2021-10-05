import { EntitySchema } from 'typeorm';
import { Application } from '../../../domain/entities/application.entity';

export const ApplicationSchema = new EntitySchema<Application>({
    name: 'Application',
    target: Application,
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
      },
     
    },
    relations: {
      jobPosition: {
        type: 'many-to-one',
        target: 'JobPosition',
      },
      attachements: {
        type: 'one-to-many',
        target: 'File',
      }
    },
  });