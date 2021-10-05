import { EntitySchema } from 'typeorm';
import { File } from '../../../domain/entities/file.entity';

export const FileSchema = new EntitySchema<File>({
    name: 'File',
    target: File,
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      name: {
        type: String,
      },
      extension: {
        type: String,
      },
      size: {
        type: Number,
      },
     
    },
    relations: {
      application: {
        type: 'many-to-one',
        target: 'Application',
      },

    },
  });