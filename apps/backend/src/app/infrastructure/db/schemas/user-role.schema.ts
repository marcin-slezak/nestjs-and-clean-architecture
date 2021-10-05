import { EntitySchema } from 'typeorm';
import { UserRole } from '../../../domain/entities/user-role.entity';

export const UserRoleSchema = new EntitySchema<UserRole>({
    name: 'UserRole',
    target: UserRole,
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      name: {
        type: String,
      },
    },
    relations: {
      users: {
        type: 'one-to-many',
        target: 'User',
      },
    },
  });