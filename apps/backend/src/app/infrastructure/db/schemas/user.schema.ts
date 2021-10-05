import { EntitySchema } from 'typeorm';
import { User } from '../../../domain/entities/user.entity';

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
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
      role: {
        type: 'many-to-one',
        target: 'UserRole',
      },
    },
  });